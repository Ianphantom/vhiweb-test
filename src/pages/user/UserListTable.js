import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import styled from "styled-components";

// import component
import iconSearch from "../../assets/svg/icon-search.svg";
import { columns } from "./ColumnStructure";

// import function
import { getData } from "../../utils/apiUtils";

const UserListTable = () => {
  const [dataEmployee, setDataEmployee] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData(
          "https://reqres.in/api/users?per_page=12"
        );
        setDataEmployee(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <PerizinanContainer>
      <div className='search-bar'>
        <div className='icon-search'>
          <img src={iconSearch} alt='icon-search' />
        </div>
        <input
          type='search'
          name=''
          id=''
          placeholder='Search your employee data'
        />
      </div>
      <div className='title'>Your All Employee Data</div>
      <DataTable
        columns={columns}
        data={dataEmployee}
        pagination
        paginationPerPage={5}
      />
    </PerizinanContainer>
  );
};

const PerizinanContainer = styled.div`
  padding: 25px 20px;
  margin-bottom: 40px;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 12px 24px rgba(18, 38, 63, 0.03);
  .search-bar {
    display: flex;
    align-items: center;
    gap: 12px;
    background: #ffffff;
    border: 1px solid #eff2f7;
    border-radius: 8px;
    padding: 11px 16px;
    margin-bottom: 20px;
    input {
      border: none;
      width: 100%;
      font-size: 14px;
      line-height: 19px;
      padding: 0px 5px;
      color: #9a9a9a;
      &:focus {
        outline-color: white;
      }
    }
  }
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

export default UserListTable;
