const router = require("express").Router();
const employeeprofile = require("../models/Employee_Profile_Page");

//insert
router.route("/insert").post((req, res) => {


    let First_Name = req.body.First_Name;
    let Last_Name = req.body.Last_Name;
    let Address1 = req.body.Address1;
    let Address2 = req.body.Address2;
    let NIC = req.body.NIC;
    let Phone_Number = req.body.Phone_Number;
    let Designation = req.body.Designation;
    let Salary = req.body.Salary;
    let Email = req.body.Email;

    const employeeprofileobj = new employeeprofile({

        First_Name, Last_Name, Address1, Address2, NIC, Phone_Number, Designation, Salary, Email

    });

    employeeprofileobj.save().then(() => {

        res.json("Insert Employee Details Successfully");

    }).catch((err) => {

        console.log(err);

    });

});

//view
router.route("/").get((req, res) => {

    employeeprofile.find().then((employeeprofile) => {
        res.json(employeeprofile);
    }).catch((err) => {
        console.log(err);
    });

});

//delete
router.route("/delete/:id").delete((req, res) => {

    let Eprofile = req.params.id;

    employeeprofile.findByIdAndDelete(Eprofile).then(() => {
        res.json("Delete Employee Details successfully");
    }).catch((err) => {
        console.log(err);
    });

});


//update
router.route("/update/:id").put((req, res) => {

    const uid = req.params.id;

    let First_Name = req.body.First_Name;
    let Last_Name = req.body.Last_Name;
    let Address1 = req.body.Address;
    let Address2 = req.body.Address;
    let NIC = req.body.NIC;
    let Phone_Number = req.body.Phone_Number;
    let Designation = req.body.Designation;
    let Salary = req.body.Salary;
    let Email = req.body.Email;


    const employeeprofileobj = ({

        First_Name, Last_Name, Address1, Address2, NIC, Phone_Number, Designation, Salary, Email


    })

    employeeprofile.findByIdAndUpdate(uid, employeeprofileobj).then((udata) => {
        res.json(udata);
    }).catch((err) => {
        console.log(err);
    });

});

//Find one
router.route("/:id").get((req, res) => {

    let id = req.params.id;

    employeeprofile.findById(id).then((data) => {
        res.json(data);
    }).catch((err) => {
        console.log(err);
    })

})


router.route("/search").post((req, res) => {

    let employee = req.body;

    employeeprofile.findOne(
        {
            NIC: employee.NIC,
            Phone_Number: employee.Phone_Number
        }
    )
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        res.json(err.message);
    })

})


module.exports = router;