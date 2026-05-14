export default function handler(req, res) {
  const pdfLink = 'https://drive.google.com/file/d/1gdWUF_HNKiULQHhzB6wqOoi_--Ok72tH/view?usp=sharing';
  res.redirect(302, pdfLink);
}
