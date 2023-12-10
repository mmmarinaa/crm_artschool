const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define(
  "user",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    login: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
  },
  {
    tableName: "users", // Указываем имя существующей таблицы
    timestamps: false, // Если в таблице отсутствуют поля createdAt и updatedAt
  }
);

const Day = sequelize.define(
  "day",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true },
  },
  {
    tableName: "days", // Указываем имя существующей таблицы
    timestamps: false, // Если в таблице отсутствуют поля createdAt и updatedAt
  }
);

const Group = sequelize.define(
  "group",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true },
    date_creation: { type: DataTypes.DATE },
  },
  {
    tableName: "groups", // Указываем имя существующей таблицы
    timestamps: false, // Если в таблице отсутствуют поля createdAt и updatedAt
  }
);

const Role = sequelize.define(
  "role",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    role: { type: DataTypes.STRING, unique: true },
  },
  {
    tableName: "roles", // Указываем имя существующей таблицы
    timestamps: false, // Если в таблице отсутствуют поля createdAt и updatedAt
  }
);

const Room = sequelize.define(
  "room",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    number: { type: DataTypes.INTEGER, unique: true },
  },
  {
    tableName: "rooms", // Указываем имя существующей таблицы
    timestamps: false, // Если в таблице отсутствуют поля createdAt и updatedAt
  }
);

const Schedule = sequelize.define(
  "schedule",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  },
  {
    tableName: "schedule", // Указываем имя существующей таблицы
    timestamps: false, // Если в таблице отсутствуют поля createdAt и updatedAt
  }
);

const Student = sequelize.define(
  "student",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    surname: { type: DataTypes.STRING, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    patronymic: { type: DataTypes.STRING, allowNull: true },
    sex: { type: DataTypes.CHAR, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: true },
    phone: { type: DataTypes.INTEGER, allowNull: false },
    birthday: { type: DataTypes.DATE, allowNull: false },
  },
  {
    tableName: "students", // Указываем имя существующей таблицы
    timestamps: false, // Если в таблице отсутствуют поля createdAt и updatedAt
  }
);

const Subject = sequelize.define(
  "subject",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true },
  },
  {
    tableName: "subjects", // Указываем имя существующей таблицы
    timestamps: false, // Если в таблице отсутствуют поля createdAt и updatedAt
  }
);

const Syllabus = sequelize.define(
  "syllabus",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    hours: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    tableName: "syllabus", // Указываем имя существующей таблицы
    timestamps: false, // Если в таблице отсутствуют поля createdAt и updatedAt
  }
);

const Teacher = sequelize.define(
  "teacher",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    surname: { type: DataTypes.STRING, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    patronymic: { type: DataTypes.STRING, allowNull: true },
    sex: { type: DataTypes.CHAR, allowNull: false },
    passport: { type: DataTypes.INTEGER, allowNull: false },
    phone: { type: DataTypes.INTEGER, allowNull: false },
    birthday: { type: DataTypes.DATE, allowNull: false },
  },
  {
    tableName: "teachers", // Указываем имя существующей таблицы
    timestamps: false, // Если в таблице отсутствуют поля createdAt и updatedAt
  }
);

const TeacherWorkload = sequelize.define(
  "teacherworkload",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    hours: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    tableName: "teacherworkload", // Указываем имя существующей таблицы
    timestamps: false, // Если в таблице отсутствуют поля createdAt и updatedAt
  }
);

const Time = sequelize.define(
  "time",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    hours: { type: DataTypes.TIME, allowNull: false },
  },
  {
    tableName: "time", // Указываем имя существующей таблицы
    timestamps: false, // Если в таблице отсутствуют поля createdAt и updatedAt
  }
);

const TrainingPrograms = sequelize.define(
  "training_programs",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true },
  },
  {
    tableName: "training_programs", // Указываем имя существующей таблицы
    timestamps: false, // Если в таблице отсутствуют поля createdAt и updatedAt
  }
);

const TypeClasses = sequelize.define(
  "type_classes",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true },
  },
  {
    tableName: "type_classes", // Указываем имя существующей таблицы
    timestamps: false, // Если в таблице отсутствуют поля createdAt и updatedAt
  }
);

Group.hasMany(Student, { foreignKey: "group_id" });
Student.belongsTo(Group, { foreignKey: "group_id" });

Teacher.hasMany(Group, { foreignKey: "teacher_id" });
Group.belongsTo(Teacher, { foreignKey: "teacher_id" });

Teacher.hasOne(TeacherWorkload);
TeacherWorkload.belongsTo(Teacher);

Teacher.hasMany(Schedule, { foreignKey: "teacher_id" });
Schedule.belongsTo(Teacher, { foreignKey: "teacher_id" });

Room.hasMany(Schedule, { foreignKey: "room_id" });
Schedule.belongsTo(Room, { foreignKey: "room_id" });

Group.hasMany(Schedule, { foreignKey: "group_id" });
Schedule.belongsTo(Group, { foreignKey: "group_id" });

Time.hasMany(Schedule, { foreignKey: "time_id" });
Schedule.belongsTo(Time, { foreignKey: "time_id" });

TrainingPrograms.hasMany(Group, { foreignKey: "program_id" });
Group.belongsTo(TrainingPrograms, { foreignKey: "program_id" });

TypeClasses.hasMany(Group, { foreignKey: "type_id" });
Group.belongsTo(TypeClasses, { foreignKey: "type_id" });

TypeClasses.hasMany(Time, { foreignKey: "type_id" });
Time.belongsTo(TypeClasses, { foreignKey: "type_id" });

Subject.hasMany(Schedule, { foreignKey: "subject_id" });
Schedule.belongsTo(Subject, { foreignKey: "subject_id" });

Subject.hasMany(Syllabus);
Syllabus.belongsTo(Subject);

Day.hasMany(Schedule, { foreignKey: "day_id" });
Schedule.belongsTo(Day, { foreignKey: "day_id" });

User.hasOne(Teacher, { foreignKey: "user_id" });
Teacher.belongsTo(User, { foreignKey: "user_id" });

User.hasOne(Student, { foreignKey: "user_id" });
Student.belongsTo(User, { foreignKey: "user_id" });

Role.hasMany(User, { foreignKey: "role_id" });
User.belongsTo(Role, { foreignKey: "role_id" });

module.exports = {
  User,
  TeacherWorkload,
  Teacher,
  Schedule,
  Student,
  Subject,
  Syllabus,
  Time,
  TrainingPrograms,
  TypeClasses,
  Group,
  Room,
  Day,
  Role,
};
