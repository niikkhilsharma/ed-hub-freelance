import React from 'react';
import clsx from 'clsx';

type LoginStatus = 'Present' | 'Absent' | 'Leave' | 'Fail';

interface LoginRecord {
  date: string;
  time: string;
  ip: string;
  device: string;
  location: string;
  status: LoginStatus;
}

const loginData: LoginRecord[] = [
  { date: '12/10/25', time: '10:12 AM', ip: '192.168.1.23', device: 'Device Name', location: 'State / City', status: 'Fail' },
  { date: '12/10/25', time: '-', ip: '-', device: '-', location: '-', status: 'Absent' },
  { date: '12/10/25', time: '10:12 AM', ip: '192.168.1.23', device: 'Device Name', location: 'State / City', status: 'Present' },
  { date: '12/10/25', time: '10:12 AM', ip: '192.168.1.23', device: 'Device Name', location: 'State / City', status: 'Present' },
  { date: '12/10/25', time: '10:12 AM', ip: '192.168.1.23', device: 'Device Name', location: 'State / City', status: 'Present' },
  { date: '12/10/25', time: '-', ip: '-', device: '-', location: '-', status: 'Leave' },
  { date: '12/10/25', time: '10:12 AM', ip: '192.168.1.23', device: 'Device Name', location: 'State / City', status: 'Present' },
  { date: '12/10/25', time: '10:12 AM', ip: '192.168.1.23', device: 'Device Name', location: 'State / City', status: 'Present' },
  { date: '12/10/25', time: '10:12 AM', ip: '192.168.1.23', device: 'Device Name', location: 'State / City', status: 'Fail' },
  { date: '12/10/25', time: '10:12 AM', ip: '192.168.1.23', device: 'Device Name', location: 'State / City', status: 'Present' },
];

const TeacherTable: React.FC = () => {
  return (
    <div className="overflow-x-auto rounded-2xl custom-scrollbar-thin">
      <table className="min-w-[800px] px-3 py-2 rounded-2xl w-full bg-white text-sm text-center border-separate border-spacing-y-2">
        <thead>
          <tr className="bg-[#3366ff] text-white">
            <th className="px-8 py-5 text-left rounded-tl-2xl rounded-bl-2xl">Login Date</th>
            <th className="px-8 py-5">Login Time</th>
            <th className="px-8 py-5">IP Address</th>
            <th className="px-8 py-5">Device</th>
            <th className="px-8 py-5">State / City</th>
            <th className="px-8 py-5">Status</th>
            <th className="px-8 py-5 text-right rounded-tr-2xl rounded-br-2xl">Action</th>
          </tr>
        </thead>
        <tbody>
          {loginData.map((record, index) => {
            const isFailOrAbsent = record.status === 'Fail' || record.status === 'Absent';

            return (
              <tr
                key={index}
                className={clsx(
                  'text-black',
                  record.status === 'Absent' && 'bg-red-50',
                  record.status === 'Leave' && 'bg-yellow-50',
                  record.status === 'Fail' && 'bg-gray-100',
                  record.status === 'Present' && 'bg-gray-100'
                )}
              >
                <td className="px-8 py-4 text-left border-l border-y border-gray-200  rounded-tl-2xl rounded-bl-2xl">{record.date}</td>
                <td className="px-4 py-4 border-y border-gray-200 ">{record.time}</td>
                <td className="px-4 py-4 border-y border-gray-200 ">{record.ip}</td>
                <td className="px-4 py-4 border-y border-gray-200 ">{record.device}</td>
                <td className="px-4 py-4 border-y border-gray-200 ">{record.location}</td>
                <td className="px-4 py-4 border-y border-gray-200 ">
                  <span
                    className={clsx(
                      'font-medium',
                      record.status === 'Present' && 'text-green-600',
                      record.status === 'Fail' && 'text-red-500',
                      record.status === 'Absent' && 'text-red-500',
                      record.status === 'Leave' && 'text-yellow-500'
                    )}
                  >
                    {record.status}
                  </span>
                </td>
                <td className="px-4 py-4 border-r border-y border-gray-200  text-right rounded-tr-2xl rounded-br-2xl">
                  {isFailOrAbsent ? (
                    <button className="border bg-white border-gray-300 rounded-full px-4 py-1 text-xs font-medium hover:bg-gray-100">
                      Action
                    </button>
                  ) : (
                    <span className="text-gray-400">-</span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherTable;
