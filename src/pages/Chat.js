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
    const q = query(collection(db, "chat"), orderBy("date"), limitToLast("5"));
    const querySnapshot = await getDocs(q);

    const messagesArray = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.id);
      console.log(doc.data);
      messagesArray.push(doc.data());
    });
    setMessages(messagesArray);
  };

  useEffect(() => {
    readMessages();
  }, []);

  return (
    <div>
      {messages &&
        messages.map((text) => (
          <div
            style={{
              backgroundColor: "pink",
              borderRadius: "20px",
              margin: "15px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <p style={{ fontWeight: "bold" }}>{text.user}</p>
              <p style={{ fontSize: "small" }}>
                {text.date.toDate().toLocaleString("de")}
              </p>{" "}
            </div>
            <p>{text.text}</p>
          </div>
        ))}
      <Box sx={{ "& button": { m: 1 } }}>
        <TextField
          id="outlined-basic"
          label="Text..."
          variant="outlined"
          value={message}
          onChange={handleMessage}
        />
        <Button
          variant="contained"
          size="small"
          onClick={sendMessage}
          endIcon={<SendIcon />}
        ></Button>
      </Box>
    </div>
  );
}

export default Chat;
