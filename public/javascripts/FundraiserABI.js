if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider)
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
}
var fundraiserContract = web3.eth.contract([{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "ownerWidthdraw", "outputs": [{ "name": "res", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "total", "outputs": [{ "name": "_total", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "MAX_UINT256", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "withdraw", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "goal", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getInfo", "outputs": [{ "name": "", "type": "address" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "bool" }, { "name": "", "type": "bool" }, { "name": "", "type": "bool" }, { "name": "", "type": "bool" }, { "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_donator", "type": "address" }], "name": "isIn", "outputs": [{ "name": "ok", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "donator", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "start", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getDonators", "outputs": [{ "name": "list", "type": "address[]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "_donator", "type": "address" }], "name": "getDonationOf", "outputs": [{ "name": "", "type": "address" }, { "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "end", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_value", "type": "uint256" }], "name": "donate", "outputs": [{ "name": "res", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_fund", "type": "address" }, { "name": "_reward", "type": "address" }, { "name": "_happy", "type": "address" }], "name": "open", "outputs": [{ "name": "succes", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "open", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [{ "name": "_name", "type": "string" }, { "name": "_admin", "type": "address" }, { "name": "_goal", "type": "uint256" }, { "name": "_start", "type": "uint256" }, { "name": "_end", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_address", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" }, { "indexed": false, "name": "message", "type": "string" }, { "indexed": false, "name": "total", "type": "uint256" }], "name": "Notification", "type": "event" }]);
var fundtokenContract = web3.eth.contract([{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "_name", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "spender", "type": "address" }, { "name": "tokens", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "_totalSupply", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "from", "type": "address" }, { "name": "to", "type": "address" }, { "name": "tokens", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "_decimals", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "MAX_UINT256", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "from", "type": "address" }, { "name": "tokens", "type": "uint256" }], "name": "useToken", "outputs": [{ "name": "ok", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "balance", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "_symbol", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "to", "type": "address" }, { "name": "tokens", "type": "uint256" }], "name": "transfer", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "tokenOwner", "type": "address" }, { "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "name": "remaining", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "investToken", "outputs": [{ "name": "ok", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "tokens", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "tokenOwner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "tokens", "type": "uint256" }], "name": "Approval", "type": "event" }]);
var happytokenContract = web3.eth.contract([{ "constant": false, "inputs": [{ "name": "from", "type": "address" }, { "name": "_admin", "type": "address" }, { "name": "tokens", "type": "uint256" }], "name": "useToken", "outputs": [{ "name": "ok", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "_name", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "spender", "type": "address" }, { "name": "tokens", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "_totalSupply", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "from", "type": "address" }, { "name": "to", "type": "address" }, { "name": "tokens", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "_decimals", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "MAX_UINT256", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "balance", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "_symbol", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "to", "type": "address" }, { "name": "tokens", "type": "uint256" }], "name": "transfer", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "tokenOwner", "type": "address" }, { "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "name": "remaining", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "to", "type": "address" }, { "name": "tokens", "type": "uint256" }], "name": "investToken", "outputs": [{ "name": "ok", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "tokens", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "tokenOwner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "tokens", "type": "uint256" }], "name": "Approval", "type": "event" }]);
var adminContract = web3.eth.contract([{ "constant": true, "inputs": [], "name": "getInfo", "outputs": [{ "name": "", "type": "address[]" }, { "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "investTo", "outputs": [{ "name": "ok", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_openedList", "type": "address" }], "name": "isIn", "outputs": [{ "name": "ok", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_newOwner", "type": "address" }], "name": "newOnwer", "outputs": [{ "name": "ok", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_address", "type": "address" }], "name": "openFundraiser", "outputs": [{ "name": "ok", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "name": "_fund", "type": "address" }, { "name": "_reward", "type": "address" }, { "name": "_happy", "type": "address" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_address", "type": "address" }, { "indexed": false, "name": "message", "type": "string" }], "name": "Notification", "type": "event" }]);

function toggle(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

var _admin = "0xecd41dba967bd0628a109ba05faf773336987dfb";
var _fund = "0xdceb793fefb7be451dd2771c47e4fdf528314084";
var _happy = "0x1d1685490ce4580780aa8ce70547f9f258aa141c";
var admin = adminContract.at(_admin);
var fund = fundtokenContract.at(_fund);
var happy = happytokenContract.at(_happy);
var testABI = [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "ownerWidthdraw", "outputs": [{ "name": "res", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "total", "outputs": [{ "name": "_total", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "MAX_UINT256", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "withdraw", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "goal", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getInfo", "outputs": [{ "name": "", "type": "address" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "bool" }, { "name": "", "type": "bool" }, { "name": "", "type": "bool" }, { "name": "", "type": "bool" }, { "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_donator", "type": "address" }], "name": "isIn", "outputs": [{ "name": "ok", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "donator", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "start", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getDonators", "outputs": [{ "name": "list", "type": "address[]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "_donator", "type": "address" }], "name": "getDonationOf", "outputs": [{ "name": "", "type": "address" }, { "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "end", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_value", "type": "uint256" }], "name": "donate", "outputs": [{ "name": "res", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_fund", "type": "address" }, { "name": "_reward", "type": "address" }, { "name": "_happy", "type": "address" }], "name": "open", "outputs": [{ "name": "succes", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "open", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [{ "name": "_name", "type": "string" }, { "name": "_admin", "type": "address" }, { "name": "_goal", "type": "uint256" }, { "name": "_start", "type": "uint256" }, { "name": "_end", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_address", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" }, { "indexed": false, "name": "message", "type": "string" }, { "indexed": false, "name": "total", "type": "uint256" }], "name": "Notification", "type": "event" }];
abiDecoder.addABI(testABI);

function deploy() {
    var _name = $("#title").val();;
    document.getElementById("deploy").style.visibility = "hidden";
    document.getElementById('address').value = "Please wait for contract to be mined......";
    var d = new Date();
    var n = d.getTimezoneOffset();
    var _goal = $("#goal").val();
    var _start = (+new Date($("#start").val())) / 1000 + n * 60;
    var _end = (+new Date($("#end").val())) / 1000 + n * 60 + 23 * 3600 + 3540;

    var fundraiser = fundraiserContract.new(
        _name,
        _admin,
        _goal,
        _start,
        _end, {
            from: web3.eth.accounts[0],
            data: '0x6060604052600a60025534156200001557600080fd5b6040516200157e3803806200157e8339810160405280805182019190602001805190602001909190805190602001909190805190602001909190805190602001909190505033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600c60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508460009080519060200190620000f49291906200014b565b508260038190555081600481905550806005819055506000600660016101000a81548160ff0219169083151502179055506000600660006101000a81548160ff0219169083151502179055505050505050620001fa565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200018e57805160ff1916838001178555620001bf565b82800160010185558215620001bf579182015b82811115620001be578251825591602001919060010190620001a1565b5b509050620001ce9190620001d2565b5090565b620001f791905b80821115620001f3576000816000905550600101620001d9565b5090565b90565b611374806200020a6000396000f300606060405236156100ef576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100f45780630b2bc2d0146101825780632ddbd13a146101af57806333a581d2146101d85780633ccfd60b14610201578063401938831461022e5780635a9b0b89146102575780638da5cb5b1461036057806396210c51146103b5578063ade6897014610406578063be9a655514610469578063bf1482fa14610492578063dc5b2ee4146104fc578063efbe1c1c1461057c578063f14faf6f146105a5578063f71fd596146105e0578063fcfff16f1461066f575b600080fd5b34156100ff57600080fd5b61010761069c565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561014757808201518184015260208101905061012c565b50505050905090810190601f1680156101745780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561018d57600080fd5b61019561073a565b604051808215151515815260200191505060405180910390f35b34156101ba57600080fd5b6101c2610919565b6040518082815260200191505060405180910390f35b34156101e357600080fd5b6101eb610923565b6040518082815260200191505060405180910390f35b341561020c57600080fd5b610214610947565b604051808215151515815260200191505060405180910390f35b341561023957600080fd5b61024161095a565b6040518082815260200191505060405180910390f35b341561026257600080fd5b61026a610960565b604051808b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018a81526020018981526020018881526020018781526020018615151515815260200185151515158152602001841515151581526020018315151515815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561031c578082015181840152602081019050610301565b50505050905090810190601f1680156103495780820380516001836020036101000a031916815260200191505b509b50505050505050505050505060405180910390f35b341561036b57600080fd5b610373610ab1565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156103c057600080fd5b6103ec600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610ad7565b604051808215151515815260200191505060405180910390f35b341561041157600080fd5b6104276004808035906020019091905050610b7f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561047457600080fd5b61047c610bbe565b6040518082815260200191505060405180910390f35b341561049d57600080fd5b6104a5610bc4565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156104e85780820151818401526020810190506104cd565b505050509050019250505060405180910390f35b341561050757600080fd5b610533600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610c58565b604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390f35b341561058757600080fd5b61058f610ca5565b6040518082815260200191505060405180910390f35b34156105b057600080fd5b6105c66004808035906020019091905050610cab565b604051808215151515815260200191505060405180910390f35b34156105eb57600080fd5b610655600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611139565b604051808215151515815260200191505060405180910390f35b341561067a57600080fd5b610682611280565b604051808215151515815260200191505060405180910390f35b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107325780601f1061070757610100808354040283529160200191610732565b820191906000526020600020905b81548152906001019060200180831161071557829003601f168201915b505050505081565b6000600660019054906101000a900460ff16151561075757600080fd5b600660009054906101000a900460ff1615151561077357600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156107cf57600080fd5b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663de8971fc600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166002546000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15156108c057600080fd5b6102c65a03f115156108d157600080fd5b50505060405180519050506001600660006101000a81548160ff0219169083151502179055506000600660016101000a81548160ff0219169083151502179055506001905090565b6000600254905090565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81565b600660009054906101000a900460ff1681565b60035481565b60008060008060008060008060006109766112cf565b60008060006004544210925060055442119150600454421015801561099d57506005544211155b9050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600254600354600454600554600660019054906101000a900460ff1688600660009054906101000a900460ff16886000808054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a875780601f10610a5c57610100808354040283529160200191610a87565b820191906000526020600020905b815481529060010190602001808311610a6a57829003601f168201915b505050505090509c509c509c509c509c509c509c509c509c509c5050505090919293949596979899565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060008090505b600780549050811015610b75578373ffffffffffffffffffffffffffffffffffffffff16600782815481101515610b1357fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610b645760019150610b75565b600091508080600101915050610ae0565b8192505050919050565b600781815481101515610b8e57fe5b90600052602060002090016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60045481565b610bcc6112e3565b6007805480602002602001604051908101604052809291908181526020018280548015610c4e57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610c04575b5050505050905090565b60008082600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205491509150915091565b60055481565b60006004544210158015610cc157506005544211155b1561113457600660019054906101000a900460ff161515610ce157600080fd5b600082111515610cf057600080fd5b610cfc60025483611293565b600281905550600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663519888e433846000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1515610dcf57600080fd5b6102c65a03f11515610de057600080fd5b5050506040518051905050610df433610ad7565b1515610ff457600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663da13610c336000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b1515610ebf57600080fd5b6102c65a03f11515610ed057600080fd5b5050506040518051905050600160078054806001018281610ef191906112f7565b9160005260206000209001600033909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050507f85e6be6f1f04f3b2c8d71d9beed035e1fd055089404d656fd1c3126a577a14cc3383600254604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001838152602001828103825260168152602001807f726563696576656420726577617264656420636f696e0000000000000000000081525060200194505050505060405180910390a16110a3565b7f85e6be6f1f04f3b2c8d71d9beed035e1fd055089404d656fd1c3126a577a14cc3383600254604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001838152602001828103825260148152602001807f61726520616c726561647920726577617264656400000000000000000000000081525060200194505050505060405180910390a15b6110ec600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205483611293565b600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600190505b919050565b6000600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561119757600080fd5b83600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600660016101000a81548160ff021916908315150217905550600190509392505050565b600660019054906101000a900460ff1681565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038311156112c457600080fd5b818301905092915050565b602060405190810160405280600081525090565b602060405190810160405280600081525090565b81548183558181151161131e5781836000526020600020918201910161131d9190611323565b5b505050565b61134591905b80821115611341576000816000905550600101611329565b5090565b905600a165627a7a7230582022094d70291de6c0c15f5fde4b765e0c180895f08be05b3075b3403b858b59340029',
            gas: '4700000'
        },
        //...........................................................................................
        function(e, contract) {
            console.log(e, contract);
            if (typeof contract.address !== 'undefined') {
                console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
                document.getElementById('address').value = contract.address;
                document.getElementById("register").style.visibility = "visible";
            }
        });
}