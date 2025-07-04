import { useState } from "react";
import schedules from './text/js/schedules.json'
// //문제 : 
// 새로운 컴포넌트 ScheduleTableEx.jsx 파일에
// schedules 데이터를 아래와 같이 바꾸어서 UI 를 만들어 보세요.
// 단, todos 항목의 checked 속성값은 UI 에서 제외합니다.

const schedule = [
    {
    date: "2025-07-01",
    todos: [
      {
        time: "09:00",
        text: "리액트 수업 복습",
        checked: true
      },
      {
        time: "11:00",
        text: "리액트 프로젝트 기획",
        checked: true
      },
      {
        time: "16:20",
        text: "데이터베이스 테스트",
        checked: false
      }
    ]
  },
  {
    date: "2025-07-06",
    todos: [
      {
        time: "09:40",
        text: "자바 클래스 ",
        checked: false
      },
      {
        time: "12:00",
        text: "운동",
        checked: false
      },
      {
        time: "13:50",
        text: "데이터베이스 구축",
        checked: false
      }
    ]
  },
  {
    date: "2025-07-09",
    todos: [
      {
        time: "11:20",
        text: "AI 프로젝트",
        checked: false
      },
      {
        time: "14:00",
        text: "팀프로젝트 회의",
        checked: false
      }
    ]
  }
]


export default function ScheduleTable() {
  //schedule 는 상태 변수 번튼을 클릭할떄 마다 schedule 이 저장하는 
  //객체가 바뀝니다.
  const [schedule, setSchedule] = useState(schedules[0]);

  const handleSelected = (idx) => {
    setSchedule(schedules[idx]);
  };

  return (
    <div
      className="container"
      style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}
    > 
    {/* sch 객체 는 data,time(배열), todo(배열) */}
      <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        {schedule.map((sch, idx) => (
          <button
            key={idx}
            onClick={() => handleSelected(idx)}
            disabled={schedule.date === sch.date}
            style={{ //스타일에도 상태값 data 쓸수있음
              margin: "0 5px",
              padding: "8px 16px",
              backgroundColor: schedule.date === sch.date ? "#ccc" : "#007bff",
              color: schedule.date === sch.date ? "#666" : "white",
              border: "none",
              borderRadius: "4px",
              cursor: schedule.date === sch.date ? "not-allowed" : "pointer",
            }}
          >
            {sch.date}
          </button>
        ))}
      </div>
      <hr />
      <h3 style={{ color: "#333", marginBottom: "1rem" }}>{schedule.date}</h3>
      <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {schedule.todos.map((t,idx) => (
              <th
                key={`time-${idx}`}
                style={{
                  backgroundColor: "#f8f9fa",
                  padding: "10px",
                  textAlign: "center",
                }}
              >
                {t.time}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            
            {schedule.todos.map((t, idx) => (
              <td
                key={`todo-${idx}`}
                style={{ padding: "10px", textAlign: "center" }}
              >
                {t.text}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
