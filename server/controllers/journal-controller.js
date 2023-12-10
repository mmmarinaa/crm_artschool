const {
  Schedule,
  Student,
  Time,
  Room,
  Subject,
  Group,
  Teacher,
  Day,
} = require("../models/models");

class JournalController {
  async getAll(req, res, next) {
    try {
      const allClasses = await Schedule.findAll();

      const classes = await Promise.all(
        allClasses.map(async (classItem) => {
          const { room_id, time_id, subject_id, group_id, day_id, teacher_id } =
            classItem;

          const [room, time, subject, group, teacher, day] = await Promise.all([
            Room.findOne({ where: { id: room_id } }),
            Time.findOne({ where: { id: time_id } }),
            Subject.findOne({ where: { id: subject_id } }),
            Group.findOne({ where: { id: group_id } }),
            Teacher.findOne({ where: { id: teacher_id } }),
            Day.findOne({ where: { id: day_id } }),
          ]);

          return {
            room,
            time,
            subject,
            group,
            teacher,
            day,
            ...classItem.toJSON(), // Включаем остальные поля из Schedule
          };
        })
      );

      return res.json(classes);
    } catch (e) {
      next(e);
    }
  }

  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const classToday = await Schedule.findOne({ where: { id } });
      const group_id = classToday.group_id;
      const people = await Student.findAll({ where: { group_id } });
      return res.json(people);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new JournalController();
