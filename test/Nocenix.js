const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Nocenix", function () {
    let owner, nocenix

    beforeEach(async () => {
        // Get signers
        [owner] = await ethers.getSigners();

        // Deploy Nocenix
        const Nocenix = await ethers.getContractFactory("Nocenix");
        nocenix = await Nocenix.deploy();
        await nocenix.waitForDeployment();
    });

    describe("Deployment", function () {
        it("has correct name & symbol", async function () {
            expect(await nocenix.name()).to.equal("Nocenix");
            expect(await nocenix.symbol()).to.equal("NCX");
        });

        it("has an owner", async function () {
            expect(await nocenix.owner()).to.equal(owner.address);
        });

        it("has zero initial supply", async function () {
            expect(await nocenix.totalSupply()).to.equal("0");
        })
    });
});
