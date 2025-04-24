// This component is used to display the task list.
import { TaskItem } from '../taskItem/taskItem'
import styles from './TaskList.module.css'

export const TaskList = ({
  taskList,
  editTask,
  deleteTask,
  incompleteTasks,
}) => {
  const taskItems = taskList.map((task) => (
    <TaskItem
      key={task.id}
      task={task}
      editTask={editTask}
      deleteTask={deleteTask}
    />
  ))

  return (
    <div className="box">
      <h2 className={styles.title}>
        📝 il te reste {incompleteTasks} tâches à accomplir
      </h2>
      {taskItems && taskItems.length > 0 && (
        <ul className={styles.container}>{taskItems}</ul>
      )}
    </div>
  )
}
