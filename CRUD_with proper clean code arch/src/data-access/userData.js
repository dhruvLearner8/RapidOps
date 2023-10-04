function makeGetAllUser({ getDbConnection }) {
  return async function getAllUser() {

      const db = await getDbConnection();

      const users = await db.query("SELECT * FROM myinfos");

      await db.end();

      const result = Object.values(JSON.parse(JSON.stringify(users[0])));

      return result;
     
    };
}

function makeCreateUser({ getDbConnection }) {
  return async function createUser({ userName, userEmail }) {
    const values = [userName, userEmail];

    const db = await getDbConnection();

    const outPutArray = await db.query(
      "INSERT INTO myinfos (name,email) value(?,?)",
      values
    );

    await db.end();
    console.log(outPutArray);
    return outPutArray;
  };
}

function makeGetUser({ getDbConnection }) {
  return async function getUser(validatedId) {
      const db = await getDbConnection();

      const users = await db.query(
        `SELECT * FROM myinfos WHERE usrid=${validatedId}`
      );

      await db.end();

      const result = Object.values(JSON.parse(JSON.stringify(users[0])));

      return result;

  };
}

function makeUpdateUser({ getDbConnection }) {
  return async function updateUser({ newValidatedId, newUpdateUserData }) {
      //update user data according user provided data
      const { name, email } = newUpdateUserData;

      let updateUserField = "";
      const values = [];

      if (name) {
        updateUserField += "name=?, ";
        values.push(name);
      }

      if (email) {
        updateUserField += "email=?, ";
        values.push(email);
      }

      // Remove the trailing comma and space from updateFields
      updateUserField = updateUserField.slice(0, -2);

      values.push(newValidatedId);

      const db = await getDbConnection();

      const outPutArray = await db.query(
        `UPDATE myinfos SET ${updateUserField} WHERE usrid=?`,
        values
      );

      await db.end();
    
      return outPutArray
      
  };
}

function makeDeleteUser({ getDbConnection }) {
  return async function deleteUser(validatedId) {
    try {
      const db = await getDbConnection();

      const outPutArray = await db.query(
        `DELETE FROM myinfos WHERE usrid=${validatedId}`
      );

      await db.end();

      return outPutArray

      //validation on user data not found
      // if (outPutArray[0].affectedRows === 0) {
      //   throw new Error("User Data Not Found");
      // }
    } catch (err) {
      console.log("we can't able to delete data", err.message);
      throw err;
    }
  };
}

module.exports = {
  makeGetAllUser,
  makeCreateUser,
  makeGetUser,
  makeUpdateUser,
  makeDeleteUser,
};
