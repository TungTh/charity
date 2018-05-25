pragma solidity ^0.4.9;
import "./Fundraiser.sol";
import "./library/SafeMath.sol";
import "./IUCoin.sol";
import "./HappyCoin.sol";
import "./RewardCoin.sol";
import "./ERC20_Interface.sol";

contract Admin{
    address[] openedList;
    IUCoin iu;
    HappyCoin happy;
    RewardCoin reward;
    address owner;
    event Notification (
        address _address,
        string message
        
    );

    function Admin(address _iu,address _reward,address _happy ){
        owner=msg.sender;
        iu = IUCoin(_iu);
        reward = RewardCoin(_reward);
        happy=HappyCoin(_happy);
    
    }
    modifier _owner(){
        if(msg.sender==owner)
        _;
    }
    function newOnwer(address _newOwner) _owner returns (bool ok){
        owner=_newOwner;
        return true;
    }
 //    function removeFrom(address[] storage list,address fund) _owner internal {
	// 	for (uint i=0;i<list.length;i++){
	// 		if(list[i]==fund){
	// 			delete list[i];
	// 			for (uint j=i;j<list.length-1;j++){
	// 				list[j]=list[j+1];
	// 			}
	// 			list.length=list.length-1;
	// 			break;
	// 		}
	// 	}
	// }

    function isIn(address _openedList) returns (bool ok) {
        bool _ok;
        for (uint i=0;i<openedList.length;i++){
                if(openedList[i]==_openedList){
                    _ok= true;
                    break;
                }
                else _ok=false;
        }
        return _ok;
    }

    function openFundraiser(address _address) _owner public returns (bool ok){
        require(!isIn(_address));
        Fundraiser fundraiser = Fundraiser(_address);
        fundraiser.open(iu,reward,happy);
        openedList.push(_address)-1;
        return true;
    }

    function getInfo() public view returns(address[],address ){
        return (openedList,owner);
    }
    function investTo (address _to, uint256 _value) _owner public returns (bool ok) {
        iu.createToken(_to, _value);
        return true;
    }

//.......done by Fund Owner..................................................msg.sender = fund owner;
    function payFundOwner (address _from,uint256 _value) public returns (bool ok) {
        happy.withdraw(_from,owner, _value);
        return true;
    }
    

}