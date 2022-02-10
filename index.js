const { MerkleTree } = require("merkletreejs")
const keccak256 = require("keccak256")

const whiteListAddresses = require('./addresses.json')
const whiteListAddressesLeaves = whiteListAddresses.map((x) => keccak256(x))

const tree = new MerkleTree(whiteListAddressesLeaves, keccak256)

console.log(tree.toString())

console.log(tree.getRoot().toString("hex"))