// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import {ERC20Upgradeable} from "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import {ERC20FlashMintUpgradeable} from "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20FlashMintUpgradeable.sol";
import "./contractv1.sol";

contract Testv2 is Testv1, ERC20FlashMintUpgradeable {
    function initialize(address recipient, address initialOwner) public override initializer {
        Testv1.initialize(recipient, initialOwner);
        __ERC20FlashMint_init();
    }

    function initializeV2() public reinitializer(2) {
        __ERC20FlashMint_init();
    }

    function _update(address from, address to, uint256 value)
        internal
        override(ERC20Upgradeable, Testv1)
    {
        super._update(from, to, value);
    }
}
