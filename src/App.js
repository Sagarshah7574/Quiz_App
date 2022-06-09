// import React from "react";
// import { Formik, Form, Field, FieldArray } from "formik";

// const App = () => {
//   return (
//     <div>
//       <Formik
//         initialValues={{
//           name: "",
//           phone: "",
//           password: "",
//           gender: "",
//           hobbies: [],
//         }}
//         onSubmit={(values) => {
//           console.log(values);
//         }}
//       >
//         {({ values }) => (
//           <Form>
//             <label> Name:</label>
//             <Field name="name" type="text"></Field>
//             <br /> <br />
//             <label>Phone:</label>
//             <Field name="phone" type="number"></Field>
//             <br /> <br />
//             <label>Password:</label>
//             <Field name="password " type="password"></Field>
//             <br /> <br />
//             <label>Gender:</label>
//             <label>Male:</label>
//             <Field name="gender" value="male" type="radio"></Field>
//             <label>Female:</label>
//             <Field name="gender" value="female" type="radio"></Field>
//             <br /> <br />
//             <FieldArray
//               name="hobbies"
//               render={(arrayHelpers) => (
//                 <div>
//                   {values.hobbies && values.hobbies.length > 0 ? (
//                     values.hobbies.map((hobby, index) => (
//                       <div key={index}>
//                         <Field name={`hobbies.${index}`} />
//                         <button
//                           type="button"
//                           onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
//                         >
//                           -
//                         </button>
//                         <button
//                           type="button"
//                           onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
//                         >
//                           +
//                         </button>
//                       </div>
//                     ))
//                   ) : (
//                     <button type="button" onClick={() => arrayHelpers.push("")}>
//                       {/* show this when user has removed all friends from the list */}
//                       Add Hobbies
//                     </button>
//                   )}
//                   <div></div>
//                 </div>
//               )}
//             />
//             <button type="submit">Submit</button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default App;

import React from "react";

import { Routes, Route } from "react-router-dom";
import FInalScreen from "./pages/FInalScreen";
import Questions from "./pages/Questions";
import Settings from "./pages/Settings";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import "./index.css";
function App() {
  return (
    <>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Typography variant="h2" fontWeight="bold">
            Quiz App
          </Typography>
          <Routes>
            <Route path="/" element={<Settings />}></Route>
            <Route path="/questions" element={<Questions />}></Route>
            <Route path="/score" element={<FInalScreen />}></Route>
          </Routes>
        </Box>
      </Container>
    </>
  );
}

export default App;
