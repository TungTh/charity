pragma solidity ^0.4.8;


import "./library/SafeMath.sol";

import "./RewardToken.sol";

contract Events is SafeMath {
   
    address owner;
    address host;
    bytes id;
    uint256 startD;
    uint256 endD;
    uint256 beginTime;
    address[] participants;
    mapping(address => mapping (address => bool)) attended;
    address token =0xdc235dccef90ec0a5a042b22f9b4f78f21483d9e;
    uint256 rewardValue;
    uint256 ticket;
    
    function getParticipants() public view returns (address[] list ){
        return participants;
    }
    function getID() public view returns (bytes _id) {
      return id;
    }
    function getStartD() public view returns (uint256 date){
        return startD;
    }
    function getEndD() public view returns (uint256 date) {
      return endD;
    }
    function getBeginTime() public view returns (uint256 date) {
      return beginTime;
    }


    modifier afterBegin(){
    if(now >=beginTime)
    _;
    }
    modifier activated(){
    if(now>=startD&&now<=endD)
    _;
    }
    function pop(address attendance) internal {
        for (uint i=0;i<participants.length;i++){
                if(participants[i]==attendance){
                    delete participants[i];
                    
                    for (uint j=i;j<participants.length-1;j++){
                        participants[j]=participants[j+1];
                    }
                    
                    participants.length=participants.length-1;
                    
                    break;
            }
        }
    }

    function Events(bytes _id,uint256 _startD,uint256 _endD,uint256 _beginTime,uint256 _value,uint256 _ticket){
        owner = msg.sender;
        host = msg.sender;
        id=_id;
        startD=_startD;
        endD=_endD;
        beginTime=_beginTime;
        rewardValue = _value; 
        ticket = _ticket;

      
    }

    function setHost(address _host) returns (bool ok) {
        require(msg.sender==owner);
        host =_host; 
        return true;
    }
   

    function editEvents(bytes _id,uint256 _startD,uint256 _endD,uint256 _beginTime) returns (bool ok){
        require(msg.sender==host || msg.sender==owner);
        id=_id;
        startD=_startD;
        endD=_endD;
        beginTime=_beginTime;
        return true;
    }

    function checkAttendance(address attendance) afterBegin returns (bool ok) {
        require(msg.sender==host || msg.sender==owner);
        return attended[msg.sender][attendance] = true;
    }


    function join() activated returns(bool ok){
        attended[owner][msg.sender] = false;
        if(ticket > 0){
        //
        }

        participants.push(msg.sender)-1;
        return true;
    }

    function getReward() afterBegin {
        require(attended[owner][msg.sender]);
        RewardToken tk = RewardToken(token);
        tk.reward(msg.sender,rewardValue); 
        pop(msg.sender);
        attended[msg.sender][owner]=false;
    }

   
    function viewApprove()public view returns (bool ok) {
        return attended[owner][msg.sender];
    }
 


  } 
