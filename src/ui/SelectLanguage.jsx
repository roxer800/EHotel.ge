import { useState } from "react";
import { Modal, Radio, Space } from "antd";
import { UpOutlined } from "@ant-design/icons";
import styles from "../css/Settings.module.css";
function SelectLanguage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isActive, setIsActive] = useState("1");
  const [language, setLanguage] = useState("english");
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  function languageSelector(LanguageNumber, languageContent) {
    setIsActive(LanguageNumber);
    setIsModalOpen(false);
    setLanguage(languageContent);
  }
  return (
    <>
      <h3>Settings</h3>
      <div>
        <div>
          <p>Change language</p>
          <div onClick={showModal} className={styles.settingsInput}>
            <p>{language}</p>
            <i className="fa-solid fa-chevron-down"></i>
          </div>
          <Modal
            title="Change Language"
            open={isModalOpen}
            onCancel={handleCancel}
            footer={null}
            closeIcon={<UpOutlined />}
          >
            <Radio.Group className="width" onChange={onChange} value={value}>
              <Space direction="vertical" className="width">
                <div>
                  <div
                    className={
                      (styles.selectSettingsDiv,
                      isActive === "1" && styles.activeSettingsTab)
                    }
                    onClick={() => languageSelector("1", "english")}
                  >
                    <Radio className="width" value={1}>
                      <p>English</p>
                    </Radio>
                  </div>
                  <div
                    className={
                      (styles.selectSettingsDiv,
                      isActive === "2" && styles.activeSettingsTab)
                    }
                    onClick={() => languageSelector("2", "Georgian")}
                  >
                    <Radio className="width" value={2}>
                      <p>Georgian</p>
                    </Radio>
                  </div>
                  <div
                    className={
                      (styles.selectSettingsDiv,
                      isActive === "3" && styles.activeSettingsTab)
                    }
                    onClick={() => languageSelector("3", "Russian")}
                  >
                    <Radio className="width" value={3}>
                      <p>Russian</p>
                    </Radio>
                  </div>
                </div>
              </Space>
            </Radio.Group>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default SelectLanguage;
