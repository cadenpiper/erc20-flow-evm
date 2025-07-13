// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Token is ERC20, Ownable {

    constructor(address initialOwner)
        ERC20("Nocenix", "NCX")
        Ownable(msg.sender)
    {
        _mint(initialOwner, 1000000000 * 10 ** decimals());
    }

    function mint(address _to, uint256 _amount) external  onlyOwner {
        _mint(_to, _amount);
    }

    function burn(address _from, uint256 _amount) external {
        _burn(_from, _amount);
    }
}
