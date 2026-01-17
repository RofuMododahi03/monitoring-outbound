function tambahData() {
  const nama = document.getElementById("nama").value;
  const lokasi = document.getElementById("lokasi").value;
  const status = document.getElementById("status").value;

  if (nama === "" || lokasi === "" || status === "") {
    alert("Semua data wajib diisi!");
    return;
  }

  let kelasStatus = "";
  if (status === "Ready") kelasStatus = "ready";
  if (status === "Stok Kosong") kelasStatus = "empty";
  if (status === "Recharge") kelasStatus = "recharge";

  const tabel = document.getElementById("dataBarang");
  tabel.innerHTML += `
    <tr>
      <td>${nama}</td>
      <td>${lokasi}</td>
      <td class="${kelasStatus}">${status}</td>
    </tr>
  `;

  document.getElementById("nama").value = "";
  document.getElementById("lokasi").value = "";
  document.getElementById("status").value = "";
}
