import { useState } from "react";
import { Modal, Radio, Space } from "antd";
import { UpOutlined } from "@ant-design/icons";
import styles from "../css/Settings.module.css";

function ChangeCurrency() {
  const [isModalOpenCurrency, setIsModalOpenCurrency] = useState(false);
  const [isActiveCurrency, setIsActiveCurrency] = useState("1");
  const [currency, setCurrency] = useState("USD");
  const [valueCurrency, setValuecurrency] = useState(1);

  const onChange = (e) => {
    setValuecurrency(e.target.value);
  };

  const showModal = () => {
    setIsModalOpenCurrency(true);
  };
  const handleCancel = () => {
    setIsModalOpenCurrency(false);
  };

  function currencySelector(currencyNumber, currencyContent) {
    setIsActiveCurrency(currencyNumber);
    setIsModalOpenCurrency(false);
    setCurrency(currencyContent);
  }
  return (
    <div>
      <div>
        <p>Change Currency</p>
        <div onClick={showModal} className={styles.settingsInput}>
          <p>{currency}</p>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
        <Modal
          title="Change Language"
          open={isModalOpenCurrency}
          onCancel={handleCancel}
          footer={null}
          closeIcon={<UpOutlined />}
        >
          <Radio.Group
            className="width"
            onChange={onChange}
            value={valueCurrency}
          >
            <Space direction="vertical" className="width">
              <div>
                <div
                  className={
                    (styles.selectSettingsDiv,
                    isActiveCurrency === "1" && styles.activeSettingsTab)
                  }
                  onClick={() => currencySelector("1", "USD")}
                >
                  <Radio className="width" value={1}>
                    <p>$ USD</p>
                  </Radio>
                </div>
                <div
                  className={
                    (styles.selectSettingsDiv,
                    isActiveCurrency === "2" && styles.activeSettingsTab)
                  }
                  onClick={() => currencySelector("2", "GEL")}
                >
                  <Radio className="width" value={2}>
                    <p>₾ GEL</p>
                  </Radio>
                </div>
                <div
                  className={
                    (styles.selectSettingsDiv,
                    isActiveCurrency === "3" && styles.activeSettingsTab)
                  }
                  onClick={() => currencySelector("3", "RUB")}
                >
                  <Radio className="width" value={3}>
                    <p>₽ RUB</p>
                  </Radio>
                </div>
              </div>
            </Space>
          </Radio.Group>
        </Modal>
      </div>
    </div>
  );
}

export default ChangeCurrency;
