import ColumnDetail from "./ColumnDetail";
import ColumnEmployeeName from "./ColumnEmployeeName";
import TagComponent from "../../components/TagComponent";

// data tambahan supaya tabel nya tidak terlalu kosong
const statusData = ["Active", "Inactive"];

export const columns = [
  {
    name: "ID No",
    selector: ({ id }) => id,
    style: {
      maxWidth: "min-content",
    },
    cell: ({ id }) => <div>{id}</div>,
  },
  {
    name: "Employee",
    sortable: true,
    selector: ({ row }) => row.first_name,
    cell: ({ avatar, first_name, last_name }) => (
      <ColumnEmployeeName avatar={avatar} first={first_name} last={last_name} />
    ),
  },
  {
    name: "Email",
    sortable: true,
    selector: (row) => row.email,
    cell: ({ email }) => <div>{email}</div>,
  },
  {
    name: "Status",
    sortable: true,
    selector: (row) => row.email,
    cell: (row) => {
      const id = Math.floor(Math.random() * 2);
      return (
        <TagComponent
          label={statusData[id]}
          className={id === 0 ? "tags-success" : "tags-warning"}
        />
      );
    },
  },
  {
    name: "Detail",
    button: true,
    selector: (row) => row.id,
    cell: ({ id }) => <ColumnDetail id={id} />,
  },
];
