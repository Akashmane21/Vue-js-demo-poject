<template>
  <div id="form_template">
    <h1>Vue User Registration Form</h1>

    <form style="align-content: left; width: 40%">
      <label for="first name">First Name:</label>

      <input type="text" v-model="fName" required />

      <br />

      <label for="last name">Last Name:</label>

      <input type="text" v-model="lname" required />

      <br />

      <label for="age">Age:</label>

      <input type="number" v-model="age" required />

      <br />

      <label for="enthinicy">Ethnicity:</label>

      <select v-model="enthinicy">
        <option disabled value="">Select One</option>

        <option>Asian</option>

        <option>White</option>

        <option>Black or African American</option>

        <option>American Indian or Alaska Native</option>

        <option>Hispanic or Latino</option>

        <option>Native Hawaiian or Other Pacific Islander</option>
      </select>

      <br />

      <label for="gender">Gender:</label>

      <div id="radioinput">
        <input type="radio" value="Male" v-model="gender" />

        <label for="gender"><span></span>Female</label>

        <br />

        <input type="radio" value="Female" v-model="gender" />

        <label for="gender"><span></span>Male</label>
      </div>

      <br />

      <label for="description">Description:</label>

      <textarea v-model="description"></textarea>

      <hr />

      <h2>Form Data Preview</h2>
      ]

      <div id="previewdata">
        <p>Name: {{ fName }} {{ lname }}</p>

        <p>Age: {{ age }}</p>

        <p>Gender: {{ gender }}</p>

        <p>enthinicy: {{ enthinicy }}</p>

        <p>Description: {{ description }}</p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Form",

  props: {
    msg: String,
  },

  data() {
    return {
      fName: "",

      lname: "",

      gender: "",

      enthinicy: "",

      description: "",

      age: "",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
label {
  display: block;

  margin: 20px 0 10px;

  font-weight: bold;
}

input[type="text"],
input[type="number"],
textarea,
select {
  font-size: 30px;

  border: 1px double rgb(102, 97, 96);

  border-radius: 4px;

  width: 180%;
}

#radioinput input[type="radio"] + label {
  display: inline-block;

  padding: 2px;

  margin: 0 5px;
}

#previewdata {
  color: green;

  font-size: 15px;
}
</style>
