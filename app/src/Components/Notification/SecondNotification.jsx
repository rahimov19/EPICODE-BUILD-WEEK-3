import NotificationList from "./NotificationList";

const SecondNotification = ({ title, profiles }) => {
  return (
    <div className="sidebar-wrapper1">
      <h5 className="my-3 mb-4">{title}</h5>

      {profiles &&
        profiles
          .slice(0, 50)
          .reverse()
          .map(({ _id, image, name, surname, title }) => (
            <NotificationList
              _id={_id}
              image={image}
              name={name}
              surname={surname}
              title={title}
            />
          ))}
    </div>
  );
};

export default SecondNotification;
