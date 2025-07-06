import UserCard from "@/components/admin/AllUserCard"
import AdminB2CWrapper from "@/components/b2c-admin/common-component/AdminB2CPageWrapper";
import SearchFilter from "@/components/b2c-admin/common-component/SearchBarFilter";

const users = Array.from({ length: 16 }, (_, i) => ({
  name: `User ${i + 1}`,
  image: '/common-images/teacher.png',
  role: 'Teacher' as 'Teacher',
  subtitle: 'Subject',
  classInfo: 'Class Assigned',
  batchInfo: 'Batch Assigned',
}));

const filters = [
    { id: 'f1', label: 'Filter 1' },
    { id: 'f2', label: 'Filter 1' },
    { id: 'f3', label: 'Filter 1' },
    { id: 'f4', label: 'Filter 2' },
    { id: 'f5', label: 'Filter 3' },
];

const AllTeacher = () => {
  return (
    <>
      <AdminB2CWrapper>
        <div className="bg-white rounded-3xl p-4">
           <SearchFilter filters={filters} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {users.map((user, index) => (
              <UserCard key={index} {...user} />
            ))}
          </div>

        </div>
      </AdminB2CWrapper>
    </>
  )
}

export default AllTeacher;