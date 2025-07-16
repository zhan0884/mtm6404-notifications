import NotificationItem from './NotificationItem'

export default function NotificationList({ notifications, onRemove }) {
  return (
    <div>
      {notifications.map((note) => (
        <NotificationItem key={note.id} data={note} onRemove={onRemove} />
      ))}
    </div>
  )
}
