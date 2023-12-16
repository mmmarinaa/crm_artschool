import psycopg2
import traceback
from datetime import datetime
from flask import Flask, jsonify
import random
from flask_cors import CORS

app = Flask(__name__)

try:
    

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
    
    @app.route('/get_schedule', methods=['GET'])
    def generate_schedule():
        try:
            with app.app_context():
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

                cursor.execute("SELECT name FROM days")
                days = cursor.fetchall()

                cursor.execute("SELECT hours FROM time WHERE type_id = 1")
                morning_time_strings = cursor.fetchall()

                cursor.execute("SELECT hours FROM time WHERE type_id = 2")
                evening_time_strings = cursor.fetchall()

                morning_time = [t[0].strftime("%H:%M") for t in morning_time_strings]
                evening_time = [t[0].strftime("%H:%M") for t in evening_time_strings]

                cursor.execute("SELECT * FROM training_programs")
                training_programs = cursor.fetchall()

                # Инициализация расписания
                schedule = []

                # Максимальное количество уроков в день для учителя
                total_hours_per_day = 4

                # Перебор всех учителей
                for teacher in teachers:
                    # Получение нагрузки учителя из базы данных
                    sql_query = "SELECT hours FROM teacherworkload WHERE teacher_id = %s"
                    cursor.execute(sql_query, (teacher[0],))
                    result = cursor.fetchall()
                    
                    # Преобразование списка кортежей в массив чисел
                    teacher_workload = [row[0] for row in result]

                    # Получение групп, преподаваемых учителем
                    sql_query = "SELECT * FROM groups WHERE teacher_id = %s"
                    cursor.execute(sql_query, (teacher[0],))
                    teacher_groups = cursor.fetchall()

                    # Перебор групп учителя
                    for group in teacher_groups:
                        # Получение предметов и их нагрузки для группы
                        sql_query = "SELECT subject_id, hours FROM syllabus WHERE program_id = %s"
                        cursor.execute(sql_query, (group[3],))
                        group_classes = cursor.fetchall()

                        # Переменная для отслеживания предыдущей аудитории
                        previous_classroom = None

                        # Перебор предметов в группе
                        for class_info in group_classes:
                            subject_id, hours_per_week = class_info
                            subject = next((subj for subj in subjects if subj[0] == subject_id), None)
                            if not subject:
                                continue


                            # Перебор часов по предмету в неделю
                            for _ in range(hours_per_week):
                                # Поиск доступных аудиторий
                                available_classrooms = [c for c in rooms if is_available(c, morning_time, schedule)]
                                if not available_classrooms:
                                    available_classrooms = [c for c in rooms if is_available(c, evening_time, schedule)]

                                # Прерывание цикла, если нет доступных аудиторий
                                if not available_classrooms:
                                    break

                                # Выбор аудитории (если она совпадает с предыдущей, используем её)
                                if previous_classroom in available_classrooms:
                                    classroom = previous_classroom
                                else:
                                    classroom = random.choice(available_classrooms)
                                    previous_classroom = classroom 

                                # Выбор времени занятия в зависимости от типа группы
                                if group[5] == 1:
                                    time_slot = random.choice(morning_time)
                                else:
                                    time_slot = random.choice(evening_time)

                                # Выбор дня недели
                                day = random.choice(days)

                                # Проверка, свободен ли учитель в выбранное время
                                while not is_teacher_available(teacher[1], (day, time_slot), schedule):
                                    if group[5] == 1:
                                        time_slot = random.choice(morning_time)
                                    else:
                                        time_slot = random.choice(evening_time)
                                    day = random.choice(days)

                                # Формирование урока и добавление в расписание
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
                        
            print("Я ТУУУУУУУТ")
            
            print(schedule)

            return jsonify(schedule)
        except Exception as e:
            print(e)
            traceback.print_exc()
            return jsonify({"error": str(e)})
        finally:
            if cursor:
                cursor.close()
            if conn:
                conn.close()

    
    CORS(app, resources={r"/get_schedule": {"origins": "http://localhost:3000"}})

    if __name__ == "__main__":
        app.run(debug=True)



except Exception as e:
    print(e)
    traceback.print_exc()



