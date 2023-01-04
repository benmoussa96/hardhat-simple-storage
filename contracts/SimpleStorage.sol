// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract SimpleStorage {
    // Value Types: bool, int, uint, address, bytes, enum
    // Reference Types: Array, Struct
    // Mapping Types
    // Function Types: public, external, view, pure, constant, payable
    // Variable Types: calldata, memory, storage

    uint256 public favoriteNumber;

    struct Person {
        uint256 favoriteNumber;
        string name;
    }

    Person[] public people;

    mapping(string => uint256) public nameToFavoriteNumber;

    function store(uint256 _favoriteNumber) public virtual {
        favoriteNumber = _favoriteNumber;
    }

    function retrieve() public view returns (uint256) {
        return favoriteNumber;
    }

    function addPerson(uint256 _favoriteNumber, string memory _name) public {
        people.push(Person(_favoriteNumber, _name));
        nameToFavoriteNumber[_name] = _favoriteNumber;
    }
}