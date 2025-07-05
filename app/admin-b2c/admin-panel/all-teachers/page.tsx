import UserCard from "@/components/admin/AllUserCard"

const users = Array.from({ length: 16 }, (_, i) => ({
  name: `User ${i + 1}`,
  image: '/common-images/teacher.png', 
  role: 'Teacher' as 'Teacher', 
  subtitle: 'Subject',
  classInfo: 'Class Assigned',
  batchInfo: 'Batch Assigned',
}));


const AllTeacher = () => {
    return (
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  {users.map((user, index) => (
    <UserCard key={index} {...user} />
  ))}
</div>

        </>
    )
}

export default AllTeacher;