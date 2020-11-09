// mongodb
Students
db.Students.insert({ _id: "1", name: "Véronique", city: "Paris" });
db.Students.insert({ _id: "2", name: "Steeven", city: "Lyon" });
db.Students.insert({ _id: "3", name: "Marc", city: "Marseille" });
db.Students.insert({ _id: "4", name: "Nour", city: "Lyon" });
db.Students.insert({ _id: "5", name: "Romain", city: "Paris" });
db.Students.insert({ _id: "6", name: "Sophie", city: "Paris" });

//Languages

db.Languages.insert({ _id: "1", name: "French" })
db.Languages.insert({ _id: "2", name: "English" })
db.Languages.insert({ _id: "3", name: "German" })
db.Languages.insert({ _id: "4", name: "Spanish" })
db.Languages.insert({ _id: "5", name: "Mandarin" })







// Favorites
db.Favorites.insert({ _id: "1", class: 'Maths', sport: 'Cricket', Students_id: "2" })
db.Favorites.insert({ _id: "2", class: 'Music', sport: 'Hip-hop', Students_id: "6" })
db.Favorites.insert({ _id: "3", class: 'Arts', sport: 'Boxing', Students_id: "1" })
db.Favorites.insert({ _id: "4", class: 'Literature', sport: 'Tennis', Students_id: "3" })
db.Favorites.insert({ _id: "5", class: 'Computer science', sport: 'Tennis', Students_id: "5" })
db.Favorites.insert({ _id: "6", class: 'Arts', sport: 'Baseball', Students_id: "4" })

//Studentslanguages
db.Studentslanguages.insert({ _id: "1", Students_id: "1", Languages_id: "1" })
db.Studentslanguages.insert({ _id: "2", Students_id: "1", Languages_id: "2" })
db.Studentslanguages.insert({ _id: "3", Students_id: "2", Languages_id: "1" })
db.Studentslanguages.insert({ _id: "4", Students_id: "2", Languages_id: "3" })
db.Studentslanguages.insert({ _id: "5", Students_id: "3", Languages_id: "1" })
db.Studentslanguages.insert({ _id: "6", Students_id: "4", Languages_id: "1" })
db.Studentslanguages.insert({ _id: "7", Students_id: "4", Languages_id: "2" })
db.Studentslanguages.insert({ _id: "8", Students_id: "4", Languages_id: "4" })
db.Studentslanguages.insert({ _id: "9", Students_id: "4", Languages_id: "5" })
db.Studentslanguages.insert({ _id: "10", Students_id: "5", Languages_id: "1" })
db.Studentslanguages.insert({ _id: "11", Students_id: "5", Languages_id: "5" })
db.Studentslanguages.insert({ _id: "12", Students_id: "6", Languages_id: "1" })
db.Studentslanguages.insert({ _id: "13", Students_id: "6", Languages_id: "2" })
db.Studentslanguages.insert({ _id: "14", Students_id: "6", Languages_id: "3" })


// Rapport lvl 1
db.students.find({ _id: "3" })
db.students.find({ _id: "6" })
db.students.find({ name: "Véronique", city: "Paris" }, { _id: 0 })
db.students.find({ _id: "2" }, { name: 1, _id: 0 })
db.students.find({ city: "Paris" }, { _id: 0 })
db.students.find({ city: "Lyon" }, { name: true, _id: 0 })//db.students.find({city:"Lyon"},{city: false, _id:0})


// Rapport lvl 2
db.students.aggregate([
    {
        $match: {
            "_id": "5"
        }
    },
    {
        $lookup: {
            from: "Favorites",
            localField: "_id",
            foreignField: "Students_id",
            as: "studfav"
        }
    },
    { $unwind: "$studfav" },
    {
        $project: {
            "studfav.sport": 1, "studfav.class": 1, "name": 1, "city": 1, "_id": 1
        }
    }])
//2 
db.students.aggregate([
    {
        $match: {
            "_id": "4"
        }
    },
    {
        $lookup: {
            from: "Favorites",
            localField: "_id",
            foreignField: "Students_id",
            as: "studfav"
        }
    },
    { $unwind: "$studfav" },
    {
        $project: {
            "studfav.sport": 1, "name": 1, _id: 0
        }
    }])
//3
db.students.aggregate([
    {
        $match: {
            "_id": "1"
        }
    },
    {
        $lookup: {
            from: "Favorites",
            localField: "_id",
            foreignField: "Students_id",
            as: "studfav"
        }
    },
    { $unwind: "$studfav" },
    {
        $project: {
            "studfav.class": 1, "name": 1, _id: 0
        }
    }])
//4
db.Favorites.aggregate([
    { $match: { "class": "Music" } },
    {
        $lookup: {
            from: "students",
            localField: "Students_id",
            foreignField: "_id",
            as: "result"
        }
    },
    { $unwind: "$result" },
    {
        $project: {
            "result.name": 1, "result.city": 1, 'class': 1, '_id': 1
        }
    }
])


//5
db.Favorites.aggregate([
    { $match: { "sport": "Tennis" } },
    {
        $lookup: {
            from: "students",
            localField: "Students_id",
            foreignField: "_id",
            as: "result"
        }
    },
    { $unwind: "$result" },
    {
        $project: {
            "result.name": 1, 'class': 1, '_id': 0
        }
    }
])

//6
db.Favorites.aggregate([
    { $match: { "class": "Arts" } },
    {
        $lookup: {
            from: "students",
            localField: "Students_id",
            foreignField: "_id",
            as: "result"
        }
    },
    { $unwind: "$result" },
    {
        $project: {
            "result.name": 1, 'class': 1, '_id': 0
        }
    }
])
//7
db.students.find({ city: 'Paris' }).count()




//Rapport lvl 3
//1
db.Studentslanguages.aggregate([
    {
        $match: {
            "Students_id": "1"
        }
    },
    {
        $lookup: {
            from: "students",
            localField: "Students_id",
            foreignField: "_id",
            as: "stud"
        }
    },
    { $unwind: "$stud" },

    {
        $lookup: {
            from: "Languages",
            localField: "Languages_id",
            foreignField: "_id",
            as: "lang"
        }
    },

    { $unwind: "$lang" },
    {
        $project: {
            "stud.id": 1, "stud.name": 1, "stud.city": 1, "lang.name": 1
        }


    }])


//2
db.Studentslanguages.aggregate([
    {
        $match: {
            "Students_id": "4"
        }
    },
    {
        $lookup: {
            from: "students",
            localField: "Students_id",
            foreignField: "_id",
            as: "stud"
        }
    },
    { $unwind: "$stud" },

    {
        $lookup: {
            from: "Languages",
            localField: "Languages_id",
            foreignField: "_id",
            as: "lang"
        }
    },

    { $unwind: "$lang" },
    {
        $project: {
            "stud.id": 1, "stud.name": 1, "stud.city": 1, "lang.name": 1
        }


    }])


//3
db.Studentslanguages.aggregate([
    {
        $match: {
            "Students_id": "5"
        }
    },
    {
        $lookup: {
            from: "students",
            localField: "Students_id",
            foreignField: "_id",
            as: "stud"
        }
    },
    { $unwind: "$stud" },

    {
        $lookup: {
            from: "Languages",
            localField: "Languages_id",
            foreignField: "_id",
            as: "lang"
        }
    },

    { $unwind: "$lang" },
    {
        $project: {
            "stud.name": 1, "lang.name": 1
        }


    }])


//4
