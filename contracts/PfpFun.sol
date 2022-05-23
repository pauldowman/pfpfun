// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


// World's simplest ERC721. There can only be one and it mints in the
// to the deployer in the constructor.
contract PfpFun is ERC721URIStorage, Ownable {

    constructor(string memory tokenURI) ERC721("PFP Fun", "PFPFUN") {
        _mint(msg.sender, 1);
        _setTokenURI(1, tokenURI);
    }

    // In retrospect this probably wasn't worth including Ownable
    // Should have saved gas instead
    function selfDestruct() public onlyOwner { 
      selfdestruct(payable(msg.sender)); 
    }
}
