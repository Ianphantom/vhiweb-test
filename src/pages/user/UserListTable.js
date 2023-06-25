import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ButtonSmallComponent from "../../components/ButtonSmallComponent";

// import { ENDPOINT } from "../../utils/apiEndpoint";

const columns = [
  {
    name: "#",
    selector: (row) => row.avatar,
    style: {
      maxWidth: "min-content",
    },
    cell: (row) => (
      <ImageContainer className='userImage'>
        <img src={row.avatar} alt='UserPreview' />
      </ImageContainer>
    ),
  },
  {
    name: "Nama Lengkap",
    sortable: true,
    selector: (row) => row.namaLengkap,
    cell: (row) => (
      <div className='namaKlinik'>{`${row.first_name} ${row.last_name}`}</div>
    ),
  },
  {
    name: "Email",
    sortable: true,
    selector: (row) => row.email,
    cell: (row) => <div className='namaKlinik'>{row.email}</div>,
  },
  {
    name: "Detail",
    button: true,
    selector: (row) => row.id,
    cell: (row) => {
      return (
        <Link to={`${row.uuid}`}>
          <ButtonSmallComponent
            className='button button-primary'
            label={"View"}
          />
        </Link>
      );
    },
  },
];

const UserListTable = () => {
  const [dataPerizinan, setDataPerizinan] = useState([]);

  useEffect(() => {
    let myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer ${localStorage.getItem("token")}`
    );

    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`https://reqres.in/api/users?per_page=12`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setDataPerizinan(result.data);
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <PerizinanContainer>
      <DataTable columns={columns} data={dataPerizinan} pagination />
    </PerizinanContainer>
  );
};

const PerizinanContainer = styled.div`
  padding: 25px 20px;
  margin-bottom: 40px;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 12px 24px rgba(18, 38, 63, 0.03);
  .title {
    font-weight: 600;
    font-size: 16px;
    line-height: 14px;
    color: #000000;
    margin-bottom: 24px;
  }

  .rdt_TableCol {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: rgb(33, 37, 41);
    &.custom-header-cell {
      max-width: min-content;
    }
  }

  .rdt_TableHeadRow {
    background: #f8f8fa;
    border-bottom: 1px solid #eff2f7;
    border-radius: 0px !important;
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    color: #000000;
  }

  .rdt_TableHead .rdt_TableCol:first-child {
    max-width: min-content;
  }

  .rdt_TableRow {
    padding: 16px 0px;
    &:not(:last-of-type) {
      border-bottom: 1px solid #eff2f7;
    }
  }

  .rdt_Pagination {
    border-top: 1px solid #eff2f7;
  }
`;

const ImageContainer = styled.div`
  img {
    height: 48px;
    width: 48px;
    border-radius: 50%;
  }
`;

export default UserListTable;
