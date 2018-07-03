pragma solidity ^0.4.9;

import "./ERC20_Interface.sol";
import "./library/SafeMath.sol";
 
contract FundToken is ERC20, SafeMath {

    mapping(address => uint256) balances;
    mapping(address => mapping (address => uint256)) allowed;
    address exp;

    string public name="Fund Token";
    string public symbol="FToken";
    uint8 public decimals;
    uint256 public totalSupply;
    function name() public view returns (string _name) {
        return name;
    }
    function symbol() public view returns (string _symbol) {
        return symbol;
    }
    function decimals() public view returns (uint8 _decimals) {
        return decimals;
    }
    function totalSupply() public view returns (uint256 _totalSupply) {
        return totalSupply;
    }
    function balanceOf(address _owner) public view returns (uint256 balance) {
        return balances[_owner];
    }
    function allowance(address tokenOwner, address spender) public constant returns (uint remaining) {
        return allowed[tokenOwner][spender];
    }
    function transfer(address to, uint256 tokens) public returns (bool success) {
        require(balances[msg.sender]>0);
        require(tokens>0);
        balances[msg.sender] = safeSub(balances[msg.sender],tokens);
        balances[to] = safeAdd(balances[to],tokens);
        Transfer(msg.sender, to, tokens);
        return true;
    }
    function transferFrom(address from, address to, uint256 tokens) public returns (bool success) {
        balances[from] = safeSub(balances[msg.sender],tokens);
        allowed[from][msg.sender] = safeSub(allowed[from][msg.sender],tokens);
        balances[to] = safeAdd(balances[to],tokens);
        Transfer(from, to, tokens);
        return true;
    }
    function approve(address spender, uint256 tokens) public returns (bool success) {
        allowed[msg.sender][spender] = tokens;
        Approval(msg.sender, spender, tokens);
        return true;
    }
    
    function useToken(address from,uint256 tokens) public returns(bool ok){
        require(tokens>0);
        require(balances[from]>0);
        require(balances[from]>tokens);
        balances[from] = safeSub(balances[from],tokens);
        return true;
    }
    function investToken(address _to, uint256 _value) public returns(bool ok) {
        require(_value > 0);
        balances[_to] = safeAdd(balanceOf(_to), _value);
        totalSupply=safeAdd(totalSupply, _value);
    }
  
   

}
