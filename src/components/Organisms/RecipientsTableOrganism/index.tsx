import { useState } from "react";
import { Input, Radio, RadioChangeEvent } from "antd";
import FilterOrganism from "../FilterOrganism";
import MainTableOrganism from "../MainTableOrganism";
import styles from "./styles.module.scss";
import SearchIcon from "@/src/assets/icons/home/search-orange-icon.svg";
import Image from "../../Atoms/Image";

function RecipientsTableOrganism() {
  const [radioValue, setRadioValue] = useState<number | null>();
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const columns = [
    {
      title: "User Name",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "Email Address",
      dataIndex: "emailAddress",
      key: "emailAddress",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Total Orders",
      dataIndex: "totalOrders",
      key: "totalOrders",
    },
    {
      title: "Join date",
      dataIndex: "joinDate",
      key: "joinDate",
    },
  ];

  const data = Array.from({ length: 101 }, (_, i) => ({
    key: (i + 1).toString(),
    userName: `User Name ${i + 1}`,
    emailAddress: "User@gmail.com",
    phoneNumber: "+20123483948",
    totalOrders: "100",
    joinDate: "Mar 1, 2024",
  }));

  const handleRadioChange = (e: RadioChangeEvent) => {
    const { value } = e.target;
    setRadioValue(value);

    if (value === 1) {
      const allKeys = data.map((row) => row.key);
      setSelectedRows(allKeys);
    }
  };

  const handleSelectionChange = (selectedKeys: string[]) => {
    setSelectedRows(selectedKeys);

    if (selectedKeys.length === data.length) {
      setRadioValue(1);
    } else if (selectedKeys.length > 0) {
      setRadioValue(2);
    } else {
      setRadioValue(null);
    }
  };

  return (
    <MainTableOrganism
      headerTitle="Recipients"
      columns={columns}
      dataSource={data}
      headerClassName={styles.headerContainer}
      enableSelection
      selectedRows={selectedRows}
      onSelectionChange={handleSelectionChange}
    >
      <div className={styles.tableContainer}>
        <Radio.Group
          className={styles.radioGroup}
          onChange={handleRadioChange}
          value={radioValue}
        >
          <Radio value={1}>All Users</Radio>
          <Radio value={2}>
            Selected Users ({selectedRows.length} Selected)
          </Radio>
        </Radio.Group>

        <div className={styles.searchContainer}>
          <Input
            prefix={
              <Image
                src={SearchIcon}
                alt="search icon"
                width={20}
                height={20}
              />
            }
            placeholder="Type to Search"
            className={styles.searchInput}
          />

          <FilterOrganism />
        </div>
      </div>
    </MainTableOrganism>
  );
}

export default RecipientsTableOrganism;
