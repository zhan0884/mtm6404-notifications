export default function NotificationItem({ data, onRemove }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <p><strong>{data.name}</strong>: {data.message}</p>
      <button onClick={() => onRemove(data.id)}>Clear</button>
    </div>
  )
}
