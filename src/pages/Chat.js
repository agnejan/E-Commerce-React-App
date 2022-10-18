import { React, useState, useContext, useEffect } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { LogInContext } from "../context/logInContext";
import { db } from "../firebase-config";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  onSnapshot,
  orderBy,
  limitToLast,
} from "firebase/firestore";
import { Typography } from "@mui/material";

function Chat() {
  const { user } = useContext(LogInContext);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState("");

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = async () => {
    const messageObj = {
      text: message,
      date: new Date(),
      user: user.displayName,
    };
    console.log("messageObj", messageObj);
    try {
      const docRef = await addDoc(collection(db, "chat"), messageObj);
      console.log("Document written with ID: ", docRef.id);
      readMessages();
      setMessage("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const readMessages = async () => {
    // const q = await query(collection(db, "chat"));
    // const messagesArray = [];
    // const unsubscribe = onSnapshot(q, (querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    //     messagesArray.push(doc.data());
    //   });
    // });
    const q = query(collection(db, "chat"), orderBy("date"), limitToLast("10"));
    const querySnapshot = await getDocs(q);

    const messagesArray = [];
    querySnapshot.forEach((doc) => {
      // console.log(doc.id);
      // console.log(doc.data);
      messagesArray.push(doc.data());
    });
    setMessages(messagesArray);
  };

  useEffect(() => {
    readMessages();
  }, []);

  return (
    <div
      style={{
        maxWidth: "500px",
        // height: "70%",
        paddingBottom: "60px",
      }}
    >
      {messages &&
        messages.map((text) => (
          <div
            style={{
              backgroundColor: "pink",
              borderRadius: "20px",
              margin: "15px",
              padding: " 10px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <p style={{ margin: "0", marginLeft: "15px" }}>
                <span style={{ fontWeight: "bold" }}>{text.user}</span> wrote:{" "}
              </p>
              <p
                style={{
                  fontSize: "10px",
                  margin: "0",
                  color: "grey",
                  marginLeft: "10px",
                }}
              >
                {text.date.toDate().toLocaleString("de")}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                padding: "10px",
                flexWrap: "wrap",
                flexDirection: "column",
              }}
            >
              <p
                style={{
                  margin: "0",
                  flexWrap: "wrap",
                  display: "flex",
                  marginRight: "10px",
                }}
              >
                {text.text}
              </p>
            </div>
          </div>
        ))}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          columnGap: "2vw",
          backgroundColor: "white",
          position: "fixed",
          bottom: "10px",
          width: "100%",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Text..."
          variant="outlined"
          value={message}
          onChange={handleMessage}
          style={{ width: "70%" }}
        />
        <Button
          variant="contained"
          size="small"
          onClick={sendMessage}
          endIcon={<SendIcon />}
        ></Button>
      </div>
    </div>
  );
}

export default Chat;
