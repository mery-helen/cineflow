import PDFDocument = require("pdfkit");
import * as fs from "fs";
import { exec } from "child_process";
import { IComprovante } from "../model/IComprovante";

export default class PdfService {
  public gerarIngresso(comprovante: IComprovante, nomeCliente: string): void {
    if (!fs.existsSync("./tickets")) {
      fs.mkdirSync("./tickets");
    }

    const doc = new PDFDocument({ margin: 50 });
    const nomeArquivo = `./tickets/ingresso_${nomeCliente.replace(" ", "_")}_${Date.now()}.pdf`;
    const stream = fs.createWriteStream(nomeArquivo);

    doc.pipe(stream);

    doc
      .fontSize(24)
      .font("Helvetica-Bold")
      .text("CINEFLOW", { align: "center" });
    doc.moveDown(0.5);
    doc.moveTo(50, doc.y).lineTo(550, doc.y).stroke();
    doc.moveDown();

    doc
      .fontSize(12)
      .font("Helvetica")
      .text(comprovante.getResumo(), { lineGap: 6 });
    doc.moveDown();

    doc.moveTo(50, doc.y).lineTo(550, doc.y).stroke();
    doc.moveDown(0.5);
    doc
      .fontSize(10)
      .fillColor("gray")
      .text("Obrigado por escolher o CineFlow!", { align: "center" });

    doc.end();

stream.on("finish", () => {
  console.log(`\nIngresso salvo em: ${nomeArquivo}`);
  
  const platform = process.platform;
  console.log(`Sistema operacional: ${platform}`);
  
  if (platform === "win32") {
    console.log("Abrindo PDF no Windows...");
    exec(`start "" "${nomeArquivo}"`, (error) => {
      if (error) console.error("Erro ao abrir PDF:", error);
      else console.log("PDF aberto com sucesso!");
    });
  } else if (platform === "darwin") {
    console.log("Abrindo PDF no macOS...");
    exec(`open "${nomeArquivo}"`, (error) => {
      if (error) console.error("Erro ao abrir PDF:", error);
      else console.log("PDF aberto com sucesso!");
    });
  } else {
    console.log("Abrindo PDF no Linux...");
    exec(`xdg-open "${nomeArquivo}"`, (error) => {
      if (error) console.error("Erro ao abrir PDF:", error);
      else console.log("PDF aberto com sucesso!");
    });
  }
});
  }
}
