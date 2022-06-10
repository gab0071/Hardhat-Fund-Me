const { run } = require("hardhat")

async function verify(contractAdress, args) {
    console.log("verifying contract...")
    try {
        await run("verify:verify", {
            address: contractAdress,
            contructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already Verified!")
        } else {
            console.log(e)
        }
    }
}

module.exports = { verify }
