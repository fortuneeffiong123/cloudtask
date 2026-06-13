
# ☁️ Cloud Task Project (AWS Infrastructure + CI/CD + CRUD System)
![AWS](https://img.shields.io/badge/AWS-Cloud-orange?style=for-the-badge&logo=amazon-aws)
![EC2](https://img.shields.io/badge/EC2-Compute-yellow?style=for-the-badge)
![S3](https://img.shields.io/badge/S3-Storage-blue?style=for-the-badge)
![RDS](https://img.shields.io/badge/RDS-Database-green?style=for-the-badge)
![CloudWatch](https://img.shields.io/badge/CloudWatch-Monitoring-purple?style=for-the-badge)
![GitHub Actions](https://img.shields.io/badge/CI%2FCD-GitHub_Actions-black?style=for-the-badge&logo=githubactions)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)
## 📌 Project Overview
The **Cloud Task Project** is a real-world AWS cloud engineering implementation that demonstrates how to design, deploy, and manage scalable cloud infrastructure.

It integrates core AWS services including **EC2, S3, RDS, IAM, and CloudWatch**, along with a fully functional **CRUD system for file management** and an automated **CI/CD pipeline using GitHub Actions**.

## 🎯 Objectives
- Deploy scalable cloud infrastructure on AWS  
- Implement secure identity and access management (IAM)  
- Manage file storage using Amazon S3  
- Connect application to managed database (RDS)  
- Enable monitoring and logging using CloudWatch  
- Automate deployment using GitHub Actions  
- Implement full CRUD operations in cloud storage  

## 🏗️ Architecture Overview
User
│
▼
EC2 (Application Server)
│
├──► S3 Bucket (File Storage - CRUD Operations)
│
├──► RDS (MariaDB / MySQL Database)
│
▼
CloudWatch (Monitoring & Logs)
│
▼
GitHub Actions (CI/CD Automation)

## ☁️ AWS Services Used

| Service | Purpose |
|--------|----------|
| **Amazon EC2** | Application hosting server |
| **Amazon S3** | File storage and CRUD operations |
| **Amazon RDS** | Managed relational database |
| **AWS IAM** | Access control and security |
| **Amazon CloudWatch** | Monitoring and alerting |
| **GitHub Actions** | CI/CD automation pipeline |

## 📂 File CRUD Operations (S3 Storage)

### 🟢 Create (Upload File)
```bash
aws s3 cp file.txt s3://cloudtask-files/
📥 Read (Download File)
aws s3 cp s3://cloudtask-files/file.txt .
✏️ Update (Overwrite File)
aws s3 cp updated-file.txt s3://cloudtask-files/file.txt
❌ Delete (Remove File)
aws s3 rm s3://cloudtask-files/file.txt

🔍 Query (List/Search Files)
aws s3 ls s3://cloudtask-files/
aws s3 ls s3://cloudtask-files/ --recursive
aws s3 ls s3://cloudtask-files/logs/

🗄️ Database CRUD (RDS - MySQL/MariaDB)
➕ Create Record
INSERT INTO users (name, email) VALUES ('Fortune Effiong', 'fortuneeffiong123@email.com');
📖 Read Records
SELECT * FROM users;
✏️ Update Record
UPDATE users SET email='new@email.com' WHERE id=1;
❌ Delete Record
DELETE FROM users WHERE id=1;
🔄 CI/CD Pipeline (GitHub Actions)

This project uses GitHub Actions for automated deployment to AWS.

⚙️ Workflow File Location
.github/workflows/deploy.yml

🚀 Workflow Summary
Checkout repository
Configure AWS credentials securely
Deploy application to S3 bucket
Verify deployment

🧾 Example Workflow
name: Cloud Task CI/CD Pipeline

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1

      - name: Deploy to S3
        run: aws s3 sync ./app s3://cloudtask-filese/ --delete

      - name: Verify Deployment
        run: aws s3 ls s3://cloudtask-files/

🔐 Required GitHub Secrets
Secret	Description
AWS_ACCESS_KEY_ID	IAM Access Key
AWS_SECRET_ACCESS_KEY	IAM Secret Key

🔐 Security Best Practices
Use IAM roles instead of root credentials
Enable Multi-Factor Authentication (MFA)
Restrict security group access
Enable encryption for S3 and RDS
Rotate AWS access keys regularly

📊 Key Features
Scalable AWS cloud architecture
Secure cloud infrastructure design
Full CRUD file system using S3
Database CRUD operations using RDS
Real-time monitoring with CloudWatch
Automated CI/CD deployment using GitHub Actions

🧠 Learning Outcomes
AWS cloud deployment and management
Infrastructure design and architecture
File-based CRUD operations in cloud storage
SQL database management in AWS RDS
CI/CD pipeline implementation
DevOps workflow understanding

👨‍💻 Author
Fortune Effiong
Cloud Engineering Student | AWS Enthusiast

📜 License

This project is for educational purposes only.
