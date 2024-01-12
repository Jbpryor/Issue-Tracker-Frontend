import React from "react";
import './notifications.scss';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { parseISO, formatDistanceToNow } from "date-fns";
import { selectViewMode } from "../Layout/viewModeSlice";
import { selectAllNotifications } from "./notificationsSlice";
import { selectTheme } from "../Users/User/Settings/settingsSlice";

function Notifications() {
  const notifications = useSelector(selectAllNotifications);
  const theme = useSelector(selectTheme);
  const viewMode = useSelector(selectViewMode);
  const isNotificationsActive = location.pathname === '/notifications';

  // const filteredNotifications = (notifications.map(notification => {
  //   if (user === 'Admin' || user === 'Manager') {
  //     return notifications;
  //   } else if (user === 'Developer') {
  //     return notifications !== ''
  //   } else return notification !== ''
  // }))

  return (
    <>
      {viewMode === "list" ? (
        <section
          className="notifications notifications-list"
          style={{ color: theme.font_color }}
        >
          <div
            className={`notifications-title ${
              !isNotificationsActive ? "active" : ""
            }`}
          >
            Notifications
          </div>
          <div className="notifications-container">
            <div
              className="all-notifications-table-container"
              style={{
                background: theme.primary_color,
                border: theme.background_color,
              }}
            >
              <div className="notifications-table-content">
                <table>
                  <thead>
                    <tr>
                      {/* <th value='Name' className={`user-column ${userColumnActive ? 'active' : ''}`} onClick={() => handleActiveColumn('user')}>User Name <i className={`bx bx-down-arrow ${userRotate ? 'rotate' : ''} ${userColumnActive ? 'active' : ''}`} onClick={() => handleActiveColumn('user')} style={{ color: theme.font_color }} ></i></th>
                                <th value='Email' className={`email-column ${emailColumnActive ? 'active' : ''}`} onClick={() => handleActiveColumn('email')}>Email <i className={`bx bx-down-arrow ${emailRotate ? 'rotate' : ''} ${emailColumnActive ? 'active' : ''}`} onClick={() => handleActiveColumn('email')} style={{ color: theme.font_color }} ></i></th>
                                <th value='Role' className={`role-column ${roleColumnActive ? 'active' : ''}`} onClick={() => handleActiveColumn('role')}>Role <i className={`bx bx-down-arrow ${roleRotate ? 'rotate' : ''} ${roleColumnActive ? 'active' : ''}`} onClick={() => handleActiveColumn('role')} style={{ color: theme.font_color }} ></i></th> */}
                    </tr>
                  </thead>
                  {/* <tbody className="notifications-table-body">
                            {slicednotifications.map((user, index) => (
                                <notificationsTable user={user} key={index} index={index} theme={theme} />
                            ))}
                        </tbody> */}
                </table>
              </div>
              <div className="notifications-table-pagination">
                {/* <TablePagination
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  onPageChange={handlePageChange}
                  totalCount={sortednotifications.length}
                  items={sortednotifications}
                  itemsPerPage={itemsPerPage}
                  setItemsPerPage={setItemsPerPage}
                  pageCount={pageCount}
                /> */}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="notifications notifications-tile">
          {/* <notificationsSort
            selectedSort={selectedSort}
            setSelectedSort={setSelectedSort}
            rotate={rotate}
            handleRotate={handleRotate}
            theme={theme}
          /> */}

          <div
            className={`notifications-container ${
              isNotificationsActive ? "active" : ""
            }`}
          >
            {notifications.map((notification, index) => (
              <Link
                className={`notifications-link ${
                  isNotificationsActive ? "active" : ""
                }`}
                to={notification.notificationLink || "/dashboard"}
                key={index}
              >
                <div
                  className="notification-container"
                  key={index}
                  style={{
                    background: theme.primary_color,
                    border: `1px solid ${theme.border}`,
                    color: theme.font_color,
                  }}
                >
                  <div className="notification-message">
                    {notification.message}:
                  </div>

                  <div className="notifications-contents">
                    <div className="notification-title">
                      {notification.title}
                    </div>
                    <div className="notification-date">
                      {formatDistanceToNow(parseISO(notification.date))} ago
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default Notifications;
