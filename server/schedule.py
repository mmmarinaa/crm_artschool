import psycopg2
import traceback

try:
    conn = psycopg2.connect(dbname='artschool', user='postgres', password='NASLEDNIKI', host='localhost')
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM groups")
    groups = cursor.fetchall()

    cursor.execute("SELECT * FROM teachers")
    teachers = cursor.fetchall()

    cursor.execute("SELECT teacher_id, hours FROM teacherworkload")
    teachers_workload = cursor.fetchall()

    cursor.execute("SELECT * FROM rooms")
    rooms = cursor.fetchall()

    cursor.execute("SELECT * FROM syllabus")
    syllabus = cursor.fetchall()

    cursor.execute("SELECT * FROM subjects")
    subjects = cursor.fetchall()

    cursor.execute("SELECT * FROM days")
    days = cursor.fetchall()

    cursor.execute("SELECT * FROM time")
    time = cursor.fetchall()

    cursor.execute("SELECT * FROM training_programs")
    training_programs = cursor.fetchall()

    def generate_schedule(teachers, subjects, rooms, time, days, sullabus, teachers_workload, groups):
        schedule = []

        for teacher in teachers:
            sql_query = "SELECT hours FROM teacherworkload WHERE teacher_id = %s"
            cursor.execute(sql_query, (teacher[0],))
            teacher_workload = cursor.fetchall()
            print(teacher_workload)

        return schedule
    
    if __name__ == "__main__":
        import random


        schedule = generate_schedule(
            teachers, subjects, rooms, time, days, syllabus, teachers_workload, groups
        )



except Exception as e:
    print(e)
    traceback.print_exc()



