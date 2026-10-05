import React, { useState } from "react";
import { Plus, Trash2, Printer } from "lucide-react";
import { Modal } from "../common/Modal";
import { useLanguage } from "../../context/LanguageContext";

export const InvoiceMakerModal = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  const [businessName, setBusinessName] = useState("श्री गणेश ग्रामीण उद्योग");
  const [customerName, setCustomerName] = useState("रमेश पाटील");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  const [items, setItems] = useState([
    { id: 1, name: "हळद पावडर (५०० ग्रॅम पाकीट)", rate: 140, qty: 5 },
    { id: 2, name: "शुद्ध शेंगदाणा लाकडी घाणा तेल (१ लिटर)", rate: 260, qty: 2 }
  ]);

  const handleAddItem = () => {
    setItems((prev) => [
      ...prev,
      { id: Date.now(), name: "", rate: 0, qty: 1 }
    ]);
  };

  const handleRemoveItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleItemChange = (id, field, value) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const totalAmount = items.reduce(
    (acc, curr) => acc + (Number(curr.rate) || 0) * (Number(curr.qty) || 0),
    0
  );

  const handlePrint = () => {
    window.print();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`🧾 ${t("toolTitle")}`}
      maxWidth="700px"
      footer={
        <>
          <button type="button" className="btn-secondary" onClick={onClose}>
            {t("closeModal")}
          </button>
          <button type="button" className="btn-primary" onClick={handlePrint}>
            <Printer size={16} />
            <span>{t("printBill")}</span>
          </button>
        </>
      }
    >
      <div id="printable-bill-area">
        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "16px" }}>
          {t("toolSubtitle")}
        </p>

        {/* Business, Customer, and Date Fields */}
        <div className="bill-fields-grid">
          <div>
            <label style={{ fontSize: "0.85rem", fontWeight: 700, display: "block", marginBottom: "4px" }}>
              {t("businessName")}
            </label>
            <input
              type="text"
              className="bill-input"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
            />
          </div>

          <div>
            <label style={{ fontSize: "0.85rem", fontWeight: 700, display: "block", marginBottom: "4px" }}>
              {t("customerName")}
            </label>
            <input
              type="text"
              className="bill-input"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
          </div>

          <div>
            <label style={{ fontSize: "0.85rem", fontWeight: 700, display: "block", marginBottom: "4px" }}>
              {t("billDate")}
            </label>
            <input
              type="date"
              className="bill-input"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="table-responsive">
          <table className="bill-table" style={{ minWidth: "480px" }}>
            <thead>
              <tr>
                <th style={{ width: "45%" }}>{t("itemName")}</th>
                <th style={{ width: "20%" }}>{t("itemRate")}</th>
                <th style={{ width: "15%" }}>{t("itemQty")}</th>
                <th style={{ width: "15%", textAlign: "right" }}>एकूण (₹)</th>
                <th style={{ width: "40px" }}></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>
                    <input
                      type="text"
                      className="bill-input"
                      value={item.name}
                      placeholder="उदा: सेंद्रिय हळद / दूध / तेल"
                      onChange={(e) => handleItemChange(item.id, "name", e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="bill-input"
                      value={item.rate}
                      onChange={(e) => handleItemChange(item.id, "rate", e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="bill-input"
                      value={item.qty}
                      onChange={(e) => handleItemChange(item.id, "qty", e.target.value)}
                    />
                  </td>
                  <td style={{ textAlign: "right", fontWeight: 700 }}>
                    {(Number(item.rate) || 0) * (Number(item.qty) || 0)}
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => handleRemoveItem(item.id)}
                      style={{
                        background: "transparent",
                        border: "none",
                        color: "#ef4444",
                        cursor: "pointer",
                        padding: "6px"
                      }}
                      title="काढून टाका"
                      aria-label="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add item button & Total */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "14px" }}>
          <button type="button" className="btn-secondary" onClick={handleAddItem} style={{ fontSize: "0.88rem" }}>
            <Plus size={16} />
            <span>{t("addItem")}</span>
          </button>

          <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--primary-dark)" }}>
            <span>{t("totalAmount")}: </span>
            <span>₹ {totalAmount}</span>
          </div>
        </div>
      </div>
    </Modal>
  );
};
