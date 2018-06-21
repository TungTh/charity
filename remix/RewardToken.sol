pragma solidity ^0.4.9;


import "./library/SafeMath.sol";
 
contract RewardToken is  SafeMath {

  mapping(address => uint) balances;
  
  string public name="Reward Token";
  string public symbol="RToken";
  uint8 public decimals;
  
  
  // Function to access name of token .
  function name() public view returns (string _name) {
      return name;
  }
  // Function to access symbol of token .
  function symbol() public view returns (string _symbol) {
      return symbol;
  }
  // Function to access decimals of token .
  function decimals() public view returns (uint8 _decimals) {
      return decimals;
  }
  
  function balanceOf(address _owner) public view returns (uint balance) {
    return balances[_owner];
  }

  function rewarding(address _to) public returns (bool ok){
    balances[_to] = safeAdd(balanceOf(_to),10);
  }
}
