pragma solidity ^0.4.8;

import "./library/SafeMath.sol";
import "./FundToken.sol";
import "./HappyToken.sol";
import "./RewardToken.sol";
import "./admin.sol";


contract Fundraiser is SafeMath {
//Fund Information____________________________________________________________________________
    string private name;
    address private destination;
    address private owner;
    uint256 public total=10;
    uint256 private goal;
    uint256 private start;
    uint256 private end;
    bool public withdraw;
    bool public open;
    address[] private donator;
    mapping (address => uint256) donationOf;
    FundToken FToken;
    HappyToken HToken;
    RewardToken RToken;
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
    function open(address _fund,address _reward, address _happy) external returns (bool succes){
        require(msg.sender==admin);
        FToken=FundToken(_fund);
        RToken=RewardToken(_reward);
        HToken=HappyToken(_happy);
        open = true;
        return true;
    }    
//.........................................................................................
//Get Fund Information_________________________________________________________
     function getInfo() public view returns (address,uint256,uint256,uint256,uint256,bool,bool,bool,bool,string){
        bool early=now<start;
        bool _end = now>end;
        bool active = (now>=start)&&(now<=end);
        return (owner,total,goal,start,end,open,early,withdraw,active,name);

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

    function Fundraiser(string _name,address _admin,uint256 _goal,uint256 _start, uint256 _end){
        owner=msg.sender;
        destination=msg.sender;
        admin = _admin;
        name=_name;
        goal=_goal;
        start=_start;
        end=_end;
        open=false;
        withdraw=false;
    }

    function ownerWidthdraw() returns(bool res) {
        require(open);
        require(!withdraw);
        require(msg.sender==owner);
        HToken.investToken(destination,total);
        withdraw=true;
        open = false;
        return true;
    }
    function setDestination(address _destination) returns(bool res) {
        require(msg.sender==owner);
        destination=_destination;
        return true;
    }
    function isOwner() public view returns(bool res) {
        return msg.sender==owner;
    }
    function getDestination() public view returns(address result) {
        return destination;
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
        FToken.useToken(msg.sender,_value);

        if(!isIn(msg.sender)){
            RToken.rewarding(msg.sender,_value);
            donator.push(msg.sender)-1;
            Notification(msg.sender,_value,"recieved rewarded coin",total);
        } 
        else{
            RToken.rewarding(msg.sender,_value);
            Notification(msg.sender,_value,"recieved rewarded coin",total);
        } 
            
        donationOf[msg.sender]=safeAdd(donationOf[msg.sender],_value);
        return true;
    }
//...............................................................................................


} 
