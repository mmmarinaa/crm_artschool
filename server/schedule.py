import psycopg2
import traceback
from datetime import datetime

try:
    conn = psycopg2.connect(dbname='artschool', user='postgres', password='NASLEDNIKI', host='localhost')
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM groups")
    groups = cursor.fetchall()

    cursor.execute("SELECT * FROM teachers")
    teachers = cursor.fetchall()

    cursor.execute("SELECT teacher_id, hours FROM teacherworkload")
    teachers_workload = cursor.fetchall()

    cursor.execute("SELECT number FROM rooms")
    rooms = cursor.fetchall()

    cursor.execute("SELECT * FROM syllabus")
    syllabus = cursor.fetchall()

    cursor.execute("SELECT * FROM subjects")
    subjects = cursor.fetchall()

    cursor.execute("SELECT * FROM days")
    days = cursor.fetchall()

    cursor.execute("SELECT time FROM time WHERE type_id = 1")
    morning_time = cursor.fetchall()

    cursor.execute("SELECT time FROM time WHERE type_id = 2")
    evening_time = cursor.fetchall()

    cursor.execute("SELECT * FROM training_programs")
    training_programs = cursor.fetchall()

    def is_available(classroom, time_slot, schedule):

        for lesson in schedule:
            if lesson["classroom"] == classroom and lesson["time_slot"] == time_slot:
                return False 
        return True
    
    def is_teacher_available(teacher, time_slot, schedule):
    # Проверка, свободен ли учитель в выбранное время
        for lesson in schedule:
            if lesson["teacher"] == teacher and lesson["time_slot"] == time_slot:
                return False
        return True

    def generate_schedule(teachers, subjects, rooms, morning_time, evening_time, days, sullabus, teachers_workload, groups):
        schedule = []

        for teacher in teachers:
            sql_query = "SELECT hours FROM teacherworkload WHERE teacher_id = %s"
            cursor.execute(sql_query, (teacher[0],))
            result = cursor.fetchall()

            # Преобразовать список кортежей в массив чисел
            teacher_workload = [row[0] for row in result]

            sql_query = "SELECT * FROM groups WHERE teacher_id = %s"
            cursor.execute(sql_query, (teacher[0],))
            teacher_groups = cursor.fetchall()

            print(teacher_groups)

            for group in teacher_groups:
                sql_query = "SELECT subject_id, hours FROM syllabus WHERE program_id = %s"
                cursor.execute(sql_query, (group[3],))
                group_classes = cursor.fetchall()
            
                for class_info in group_classes:
                    subject_id, hours_per_week = class_info
                    subject = next((subj for subj in subjects if subj[0] == subject_id), None)
                    if not subject:
                        continue

                    for _ in range(hours_per_week):
                        available_classrooms = [c for c in rooms if is_available(c, morning_time, schedule)]
                        if not available_classrooms:
                            available_classrooms = [c for c in rooms if is_available(c, evening_time, schedule)]

                        if not available_classrooms:
                            break

                        classroom = random.choice(available_classrooms)

                        if group[5] == 1:
                            time_slot = random.choice(morning_time)
                        else:
                            time_slot = random.choice(evening_time)

                        day = random.choice(days)

                                            # Проверка, свободен ли учитель в выбранное время
                        while not is_teacher_available(teacher[1], (day, time_slot), schedule):
                            if group[5] == 1:
                                time_slot = random.choice(morning_time)
                            else:
                                time_slot = random.choice(evening_time)
                            day = random.choice(days)
                        lesson = {
                            "teacher": teacher[1],
                            "subject": subject[1],
                            "classroom": classroom,
                            "time_slot": (day, time_slot),
                            "group": group[1]
                        }
                        schedule.append(lesson)

                        print(lesson)

                        # Уменьшение нагрузки учителя
                        teacher_workload[0] -= 1   
                    

        return schedule
    
    
    if __name__ == "__main__":
        import random


        schedule = generate_schedule(
            teachers, subjects, rooms, morning_time, evening_time, days, syllabus, teachers_workload, groups
        )



except Exception as e:
    print(e)
    traceback.print_exc()



