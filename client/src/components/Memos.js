import { useState, useEffect } from "react";
const Memos = ({ state, data }) => {
  const [memos, setMemos] = useState([]);
  const { contract } = data;

  useEffect(() => {
    const memosMessage = async () => {
      const memos = await contract.getMemos();
      console.log(memos, "memos inside");
      setMemos(memos);
    };
    contract && memosMessage();
  }, [contract]);

  return (
    <>
      <p style={{ textAlign: "center", marginTop: "20px" }}>Record</p>

      <div
        className="container-fluid"
        style={{ width: "100%" }}
        key={Math.random()}
      >
        <table
          style={{
            marginBottom: "10px",
          }}
        >
          <tbody>
            {data.length > 0 && (
              <>
                <th>Name</th>
                <th>Message</th>
                <th>Reciver</th>
                <th>Sender</th>
              </>
            )}

            {data.map((memo) => {
              return (
                <tr>
                  <td
                    style={{
                      backgroundColor: "#96D4D4",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "100px",
                    }}
                  >
                    {memo.name}
                  </td>

                  <td
                    style={{
                      backgroundColor: "#96D4D4",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "300px",
                    }}
                  >
                    {memo.message}
                  </td>
                  <td
                    style={{
                      backgroundColor: "#96D4D4",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "800px",
                    }}
                  >
                    {memo.contract.address}
                  </td>
                  <td
                    style={{
                      backgroundColor: "#96D4D4",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "400px",
                    }}
                  >
                    {memo.from}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Memos;
