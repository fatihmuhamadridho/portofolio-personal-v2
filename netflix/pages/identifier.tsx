import { NextPage } from "next";
import { useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import styles from '../styles/Identifier.module.scss';

const Identifier: NextPage = () => {
    const router = useRouter();
    const [identifier, setIdentifier] = useState('');

    const handleChange = () => {

    }

    function identifierSubmitHanlder() {
        Swal.fire('Berhasil Submit')
    }

    const checkIndetifier = () => {
        Swal.fire({
            title: 'Kapan tanggal jadian kita?',
            html: `<div><input type="text" id="identifier" style="height: 50px;"></input></div>`,
            confirmButtonColor: 'red',
            confirmButtonText: 'Submit',
            allowEnterKey: true,
            preConfirm: () => {
                const identifier = (Swal.getPopup()?.querySelector('#identifier') as HTMLInputElement).value
                return { identifier: identifier}
            }
        }).then((result: any) => {
            // Swal.fire(`
            //     Identifier: ${result.value?.identifier}
            // `.trim())
            if (result.value?.identifier === '23122019') {
                Swal.fire(`Berhasil!`).then(() => {
                    router.push('/homepage')
                })
            } else {
                Swal.fire('Gagal!')
            }
        })
    }

    return (
        <div className={styles.container}>
            <h1>Who&apos;s Watching?</h1>
            <div className="identifier">
                <span onClick={checkIndetifier}><h2>Tirta</h2></span>
                <span onClick={() => Swal.fire('Others')}><h2>Others</h2></span>
            </div>
        </div>
    )
}

export default Identifier;