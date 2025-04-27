import { Box, Button, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function BaiTap2() {
  const [initialCapital, setInitialCapital] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [targetAmount, setTargetAmount] = useState(0);
  const [result, setResult] = useState([]);

  function tinhSoNam(tienVonBanDau, tienMucTieu, tiLeLai) {
    // Ép kiểu các tham số đầu vào thành số
    const vonBanDau = Number(tienVonBanDau);
    const mucTieu = Number(tienMucTieu);
    const lai = Number(tiLeLai) / 100;

    // Kiểm tra xem các giá trị có hợp lệ không
    if (isNaN(vonBanDau) || isNaN(mucTieu) || isNaN(lai)) {
      throw new Error("Các tham số đầu vào phải là số hợp lệ");
    }
    if (vonBanDau <= 0 || mucTieu <= 0 || lai <= 0) {
      throw new Error("Tiền vốn, mục tiêu và lãi suất phải lớn hơn 0");
    }
    if (vonBanDau >= mucTieu) {
      throw new Error("Tiền vốn ban đầu phải nhỏ hơn tiền mục tiêu");
    }

    let tienVonHienTai = vonBanDau;
    let soNam = 0;
    const ketQua = [];

    // Thêm trạng thái ban đầu (năm 0)
    ketQua.push({
      nam: soNam,
      tienVon: Number(tienVonHienTai.toFixed(2)),
      tienDatDuoc: Number(tienVonHienTai.toFixed(2))
    });

    // Tính toán cho đến khi đạt hoặc vượt mục tiêu
    while (tienVonHienTai < mucTieu) {
      soNam++;
      const tienLai = tienVonHienTai * lai;
      tienVonHienTai += tienLai;

      ketQua.push({
        nam: soNam,
        tienVon: Number(tienVonHienTai.toFixed(2)),
        tienDatDuoc: Number(tienVonHienTai.toFixed(2))
      });
    }

    return ketQua;
  }


  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      gap: 2
    }}>
      <img src="https://th.bing.com/th/id/OIP.dT3eZAA8kr9mTtD1xfStagHaEK?rs=1&pid=ImgDetMain" />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '50vw' }}>
        <TextField
          value={initialCapital}
          onChange={(e) => setInitialCapital(e.target.value)}
          fullWidth
          id="outlined-required"
          label="Tiền vốn"
        />
        <TextField
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          fullWidth
          id="outlined-required"
          label="Tỉ lệ lãi suất"
        />
        <TextField
          value={targetAmount}
          onChange={(e) => setTargetAmount(e.target.value)}
          fullWidth
          id="outlined-required"
          label="Tiền đạt được"
        />
        <Button variant="contained" onClick={() => setResult(tinhSoNam(initialCapital, targetAmount, interestRate))}>Tính</Button>
        {result.map((item, index) => (
          <Typography key={index}>
            Năm {item.nam}: Tiền vốn = {item.tienVon} VND
          </Typography>
        ))}
      </Box>
    </Box>
  );
}

export default BaiTap2;