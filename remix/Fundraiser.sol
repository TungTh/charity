pragma solidity ^0.4.8;

import "./library/SafeMath.sol";
import "./IUCoin.sol";
import "./HappyCoin.sol";
import "./RewardCoin.sol";
import "./admin.sol";


contract Fundraiser is SafeMath {
//Fund Information____________________________________________________________________________   
    address public owner;
    uint256 public total=10;
    uint256 public goal;
    uint256 public start;
    uint256 public end;
    bool public withdraw;
    bool public open;
    address[] public donator;
    mapping (address => uint256) donationOf;
    IUCoin iu;
    HappyCoin happy;
    RewardCoin reward;
    address admin;
    event Notification(
        address _address,
        uint256 amount,
        string message,
        uint256 total
    );
 

    modifier _activated(){
        if(now>=start&&now<=end)
        _;
    }
    modifier _expired(){
        if(now>=end)
        _;
    }

//Exercute by the Dapp Manager___________________________________________________________________
    function open(address _iu,address _reward, address _happy) external returns (bool succes){
        require(msg.sender==admin);
        iu=IUCoin(_iu);
        reward=RewardCoin(_reward);
        happy=HappyCoin(_happy);
        open = true;
        return true;
    }    
//.........................................................................................
//Get Fund Information_________________________________________________________
     function getInfo() public view returns (address,uint256,uint256,uint256,uint256,bool,bool,bool,bool){
        bool early=now<start;
        bool _end = now>end;
        bool active = (now>=start)&&(now<=end);
        return (owner,total,goal,start,end,open,early,withdraw,active);

    }
    function getDonators() public view returns (address[] list ){
        return donator;
    }
    function getDonationOf (address _donator) public view returns(address,uint256) {
        
        return (_donator,donationOf[_donator]);
    }
     function total() constant returns (uint256 _total){
        return total;
    }
//...............................................................................................

//Exercute by Fund Owner__________________________________________________________________

    function Fundraiser(address _admin,uint256 _goal,uint256 _start, uint256 _end){
        owner=msg.sender;
        admin = _admin;
        goal=_goal;
        start=_start;
        end=_end;
        open=false;
        withdraw=false;
    }

    function ownerWidthdraw() returns(bool res) {
        require(open);
        require(msg.sender==owner);
        happy.fund(owner,total);
        withdraw=true;
        return true;
    }


    function done() returns(bool res) {
        require(withdraw);
        require(msg.sender==owner);
        Admin _admin = Admin(admin);
        _admin.payFundOwner(owner,total);
        open = false;
        return true;
    }
//............................................................................................    

//Exercute by user___________________________________________________________________________    
    function isIn(address _donator) returns (bool ok) {
        bool _ok;
        for (uint i=0;i<donator.length;i++){
                if(donator[i]==_donator){
                    _ok= true;
                    break;
                }
                else _ok=false;
        }
        return _ok;
    }
    function donate (uint256 _value) _activated returns(bool res){
        require(open);
        require(_value>0);
        
        total=safeAdd(total,_value);
        iu.useToken(msg.sender,_value);

        if(!isIn(msg.sender)){
            reward.reward(msg.sender);
            donator.push(msg.sender)-1;
            Notification(msg.sender,_value,"recieved rewarded coin",total);
        } 
        else 
            Notification(msg.sender,_value,"are already rewarded",total);
        donationOf[msg.sender]=safeAdd(donationOf[msg.sender],_value);
        return true;
    }
//...............................................................................................


} 
