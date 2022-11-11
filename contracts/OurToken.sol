// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract OurToken is ERC20{

    //initial supply=10WEI=10*e18;
    
  constructor(uint256 initial_supply) ERC20("OurToken","OTK"){

    _mint(msg.sender,initial_supply);//whoever deploy this contract get all the initial supply of tokens
  }
}
