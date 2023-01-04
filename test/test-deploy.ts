import { expect } from "chai";
import { assert } from "console";
import { ethers } from "hardhat";
import { SimpleStorage, SimpleStorage__factory } from "../typechain-types";

describe("SimpleStorage", () => {
  let simpleStorageFactory: SimpleStorage__factory;
  let simpleStorage: SimpleStorage;

  beforeEach(async () => {
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await simpleStorageFactory.deploy();
  });

  it("Should start with a favorite number of 0", async () => {
    const expectedValue = 0;

    const currentValue = await simpleStorage.retrieve();

    expect(currentValue).to.equal(expectedValue);
  });

  it("Should update when we call store", async () => {
    const expectedValue = 7;

    const transactionResponse = await simpleStorage.store(expectedValue);
    await transactionResponse.wait(1);
    const updatedValue = await simpleStorage.retrieve();

    expect(updatedValue).to.equal(expectedValue);
  });
});
