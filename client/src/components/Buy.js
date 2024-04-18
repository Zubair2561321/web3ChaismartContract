import { ethers } from "ethers";
import { useState } from "react";
const Buy = ({ state, setData, contracts, setContracts }) => {
  const buyChai = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;
    console.log(name, message, contract, "contract");

    const amount = { value: ethers.utils.parseEther("0.001") };
    const transaction = await contract.buyChai(name, message, amount);
    await transaction.wait();
    let user = {
      name: name,
      message: message,
      contract: contract,
      from: transaction.from,
    };
    console.log(transaction, "Transaction is done", user);

    setData(transaction);
    contracts.push(user);

    alert("Transaction is done");
    console.log(state.contract, "state.contract");
  };
  const addUser = async (e) => {
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const { contract } = state;

    const message = document.querySelector("#message").value;
    console.log(name, message, contract, "contract");

    const amount = { value: ethers.utils.parseEther("0.001") };
    const transaction = await contract.buyChai(name, message, amount);
    await transaction.wait();

    setData(transaction);
    alert("Member is added");
  };
  console.log(contracts, "contracts");
  return (
    <>
      <div className="container-md" style={{ width: "50%", marginTop: "25px" }}>
        <form onSubmit={buyChai}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Your Name"
            />
          </div>
          <button
            // type="submit"
            className="btn btn-primary"
            onClick={(e) => addUser(e)}
            disabled={!state.contract}
          >
            Register
          </button>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <input
              type="text"
              className="form-control"
              id="message"
              placeholder="Enter Your Message"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!state.contract}
          >
            Pay
          </button>
        </form>
      </div>
    </>
  );
};
export default Buy;
