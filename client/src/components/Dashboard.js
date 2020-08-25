import React from 'react';
import PageTitle from './common/PageTitle';
import DashboardMetric from './common/DashboardMetric';
import Card from './common/Card';
import {
  faBook,
  faCalendarDay,
  faUserPlus
} from '@fortawesome/free-solid-svg-icons';
// import { FetchContext } from '../context/FetchContext';
import DashboardChart from './common/DashboardChart';
import {dashboardData} from '../util/dashboard';

const Dashboard = () => {
  // const fetchContext = useContext(FetchContext);
  // const [dashboardData, setDashboardData] = useState();

  // useEffect(() => {
  //   const getDashboardData = async () => {
  //     try {
  //       const { data } = await fetchContext.authAxios.get(
  //         'dashboard-data'
  //       );
  //       setDashboardData(data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   getDashboardData();
  // }, [fetchContext]);

  return (
    <>
      <PageTitle title="Dashboard" />
      {dashboardData ? (
        <>
          <div className="mb-4 flex flex-col sm:flex-row">
            <div className="w-full sm:w-1/3 sm:mr-2 mb-4 sm:mb-0">
              <DashboardMetric
                title="Number of booked venues"
                value={
                  dashboardData.bookedVenues
                }
                icon={faBook}
              />
            </div>
            <div className="w-full sm:w-1/3 sm:ml-2 sm:mr-2 mb-4 sm:mb-0">
              <DashboardMetric
                title="Registered Users"
                value={dashboardData.registeredUsers}
                icon={faUserPlus}
              />
            </div>
            <div className="w-full sm:w-1/3 sm:ml-2 mb-4 sm:mb-0">
              <DashboardMetric
                title="Number of reserved venues"
                value={
                  dashboardData.reservedVenues
                }
                icon={faCalendarDay}
              />
            </div>
          </div>
          <div className="w-4/4 mt-4">
            <Card>
              {dashboardData && (
                <DashboardChart
                  salesData={dashboardData.graphData}
                />
              )}
            </Card>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Dashboard;
