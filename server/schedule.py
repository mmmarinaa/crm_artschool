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

    def generate_schedule(teachers, subjects, rooms, morning_time, evening_time, days, sullabus, teachers_workload, groups):
        schedule = []

        for teacher in teachers:
            sql_query = "SELECT hours FROM teacherworkload WHERE teacher_id = %s"
            cursor.execute(sql_query, (teacher[0],))
            teacher_workload = cursor.fetchall()

            sql_query = "SELECT * FROM groups WHERE teacher_id = %s"
            cursor.execute(sql_query, (teacher[0],))
            teacher_groups = cursor.fetchall()

            print(teacher_groups)

            for group in teacher_groups:
                sql_query = "SELECT subject_id, hours FROM syllabus WHERE program_id = %s"
                cursor.execute(sql_query, (group[3],))
                group_classes = cursor.fetchall()
            
                i = 0
                # while int(teacher_workload[0][0]) > 0 and subjects:
                while i < 1:
                    subjects = sorted(group_classes, key = lambda x:(x[1]), reverse=True)
                    
                    subject = subjects[0] 
                    available_classrooms = [c for c in rooms if is_available(c, morning_time, schedule)]
                    if not available_classrooms:
                        available_classrooms = [c for c in rooms if is_available(c, evening_time, schedule)]   

                    if not available_classrooms:
                        break    
                    
                    classroom = available_classrooms[0]

                    if group[5] == 1:
                        time_slot = random.choice(morning_time)
                    else:
                        time_slot = random.choice(evening_time)
                    
                    lesson = {
                        "teacher": teacher[1],
                        "subject": subject,
                        "classroom": classroom,
                        "time_slot": time_slot,
                    }
                    schedule.append(lesson)

                    print(lesson)

                    teacher_workload -= group_classes[1]
                    subjects.remove(subject)
                    i = 1

        return schedule
    
    def is_available(classroom, time_slot, schedule):

        for lesson in schedule:
            if lesson["classroom"] == classroom and lesson["time_slot"] == time_slot:
                return False 
        return True

    
    if __name__ == "__main__":
        import random


        schedule = generate_schedule(
            teachers, subjects, rooms, morning_time, evening_time, days, syllabus, teachers_workload, groups
        )



except Exception as e:
    print(e)
    traceback.print_exc()



